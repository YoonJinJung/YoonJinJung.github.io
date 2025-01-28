import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeartProps {
  x: number;
  y: number;
  id: number;
  size: number;
}

export default function JYPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'intro' | 'game'>('intro');
  const [introStep, setIntroStep] = useState(0);
  const [gauge, setGauge] = useState(0);
  const [hearts, setHearts] = useState<HeartProps[]>([]);
  const [imageVersion, setImageVersion] = useState(1);
  const [showEffect, setShowEffect] = useState(false);
  const heartIdCounter = useRef(0);

  const introTexts = [
    '뭔가 맘에 안드는\n지율이를\n기분좋게 해주세요!',
    '지율이를\n마구 클릭하여\n게이지를채워주세요!',
    '그럼 시작!',
  ];

  // 게이지 단계에 따른 텍스트와 이미지 버전 결정을 4단계로 수정
  const getStageInfo = (gaugeValue: number) => {
    if (gaugeValue >= 100) {
      return { text: '우히히 새해복마니받으대요!!', imageVersion: 4 };
    } else if (gaugeValue >= 70) {
      return { text: '오잉? 저건뭐지?', imageVersion: 3 };
    } else if (gaugeValue >= 35) {
      return { text: '밥도 안먹을고야', imageVersion: 2 };
    } else {
      return { text: '흥 나 삐짐', imageVersion: 1 };
    }
  };

  // Preload 이미지 함수 추가
  const preloadImages = async () => {
    const imageUrls = [
      '/icons/heart.svg',
      '/jy1.jpeg',
      '/jy2.jpeg',
      '/jy3.jpeg',
      '/jy4.jpeg',
    ];

    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    };

    try {
      await Promise.all(imageUrls.map(loadImage));
      console.log('JY 이미지 모두 로드 완료');
    } catch (error) {
      console.error('이미지 로드 중 에러:', error);
    }
  };

  // intro 단계에서 이미지 preload
  useEffect(() => {
    if (phase === 'intro') {
      preloadImages();
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'intro' && introStep < introTexts.length) {
      const timer = setTimeout(() => {
        setIntroStep((prev) => prev + 1);
      }, 2300);
      return () => clearTimeout(timer);
    }
    if (introStep === introTexts.length) {
      setTimeout(() => setPhase('game'), 200);
    }
  }, [introStep, phase, introTexts.length]);

  useEffect(() => {
    if (phase === 'game' && gauge > 0 && gauge <100) {
      const timer = setInterval(() => {
        setGauge((prev) => Math.max(0, prev - 0.5));
      }, 200);
      return () => clearInterval(timer);
    }
  }, [phase, gauge]);

  useEffect(() => {
    // 게이지 값에 따라 이미지 버전 업데이트
    const { imageVersion: newVersion } = getStageInfo(gauge);
    if (imageVersion !== newVersion) {
      setImageVersion(newVersion);
    }
  }, [gauge, imageVersion]);

  const getRandomSize = () => {
    // 20px에서 35px 사이의 랜덤한 크기 반환
    return Math.random() * 40 + 40;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gauge >= 100) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = {
      x,
      y,
      id: heartIdCounter.current++,
      size: getRandomSize(), // 랜덤 크기 추가
    };

    setHearts((prev) => [...prev, newHeart]);
    const newGauge = Math.min(100, gauge + 2);
    setGauge(newGauge);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 1000);

    if (newGauge >= 100 && !showEffect) {
      setShowEffect(true);
      setTimeout(() => setShowEffect(false), 5000);
    }
  };

  if (phase === 'intro') {
    return (
      <div className='min-h-screen bg-rose-400 flex w-full items-center justify-center'>
        <div
          key={introStep}
          className='text-white text-2xl text-center animate-fade-in-out whitespace-pre-line'
        >
          {introTexts[introStep]}
        </div>
      </div>
    );
  }

  const { text: stageText } = getStageInfo(gauge);

  return (
    <div className='min-h-screen bg-rose-400 flex flex-col items-center justify-center'>
      {/* 게이지 텍스트 */}
      <div className='text-white text-xl font-bold mb-4 transition-all duration-300'>
        {stageText}
      </div>

      {/* 게이지 바 */}
      <div className='w-80 mb-8 bg-gray-800 rounded-full h-4'>
        <div
          className='bg-rose-500 h-full rounded-full transition-all duration-300'
          style={{ width: `${gauge}%` }}
        />
      </div>

      <div className='relative'>
        <div
          className='relative cursor-pointer perspective-container'
          onClick={handleClick}
        >
          <img
            src={`/jy${imageVersion}.jpeg`}
            alt='지율이'
            className={`w-80 h-80 object-cover rounded-[20px] transition-all duration-500
              ${showEffect ? 'animate-spin-glow' : ''}`}
          />
          {hearts.map((heart) => (
            <img
              key={heart.id}
              src='/icons/heart.svg'
              alt='하트'
              className='absolute animate-float-up transition-opacity'
              style={{
                left: heart.x - heart.size / 2,
                top: heart.y - heart.size / 2,
                width: heart.size,
                height: heart.size,
              }}
            />
          ))}
        </div>

        {/* 뒤로가기 버튼 - 게이지가 98 이상일 때만 표시 */}
        {gauge >= 100 && (
          <button
            onClick={() => navigate('/')}
            className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                     bg-white text-rose-500 px-6 py-2 rounded-full shadow-lg 
                     hover:bg-rose-50 transition-colors duration-300'
          >
            처음으로
          </button>
        )}
      </div>
    </div>
  );
}
