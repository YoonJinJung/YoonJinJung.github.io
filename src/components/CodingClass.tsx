import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';

export default function CodingClass() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const images = [
    '/images/compete1.png',
    '/images/compete2.png',
    '/images/compete3.png',
    '/images/compete4.png',
    '/images/compete5.png',
    '/images/compete6.png',
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (isDragging) return; // 드래그 중일 때는 자동 스크롤 중지

      slider.scrollLeft += 1; // 천천히 스크롤

      // 끝에 도달하면 처음으로 돌아가기
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 30); // 30ms마다 1px씩 이동

    return () => clearInterval(intervalId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className='min-h-screen w-full'>
      {/* 첫 번째 섹션: 사진과 검은색 배경 */}
      <div className='relative bg-black py-12'>
        <div
          className='absolute h-1/2 inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/1.png')" }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black backdrop-blur-[1px]'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent'></div>
        </div>
        <div className='relative z-10 px-6 py-10 text-center text-white'>
          <p className='text-sm font-bold text-gray-300 mb-2'>
            레고 로봇 코딩교육
          </p>
          <h1 className='text-[40px] font-bold'>스타랩 수원</h1>
          <h1 className='text-[20px] font-bold mb-12'>StarLab Suwon</h1>
          <h2 className='text-2xl font-semibold mb-6'>
            미래를 선도하는 코딩 교육의 중심
          </h2>
          <div className='flex justify-center'>
            <a href='http://star-lab.co.kr/m/sub01-03-01.php' target='_blank'>
              <Button
                className='bg-blue-700 text-[15px] font-bold rounded-md mt-5 px-6 py-6 
                hover:bg-blue-800 active:transform active:translate-y-0.5 
                transition-all duration-150 mb-10'
              >
                체험수업 신청하기
              </Button>
            </a>
          </div>
        </div>
        <div className='relative z-10 px-6 py-10 text-left text-white'>
          <p className='text-[15px] text-gray-300'>
            안녕하세요! 스타랩 수원센터입니다.
            <br />
            21세기 융합 인재를 위한 최적의 솔루션과
            <br />
            커리큘럼을 기반으로 여러분의 자녀를
            <br />
            창의적인 융합인재로 성장시킬 것을 약속드립니다.
          </p>

          {/* 특징 섹션 */}
          <section className='grid md:grid-cols-2 gap-8 mt-16 mb-12'>
            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-white/20'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-2xl font-bold text-blue-100'>
                    코딩을 왜 배워야 할까요?
                  </h3>
                  <div className='text-3xl'>🌟</div>
                </div>
                <div className='space-y-4'>
                  <div className='inline-block px-3 py-1 bg-white/10 rounded-full mb-4'>
                    <p className='text-blue-200 text-sm'>미래 필수 역량</p>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-start space-x-3'>
                      <span className='text-blue-400 mt-1'>✦</span>
                      <p className='text-gray-300 leading-relaxed'>
                        <span className='text-blue-300 font-semibold'>
                          AI 시대의 필수 언어
                        </span>
                        <br />
                        코딩은 더 이상 선택이 아닌 필수입니다
                      </p>
                    </div>
                    <div className='flex items-start space-x-3'>
                      <span className='text-blue-400 mt-1'>✦</span>
                      <p className='text-gray-300 leading-relaxed'>
                        <span className='text-blue-300 font-semibold'>
                          논리적 사고력 향상
                        </span>
                        <br />
                        문제 해결 능력과 창의력이 자연스럽게 발달합니다
                      </p>
                    </div>
                    <div className='flex items-start space-x-3'>
                      <span className='text-blue-400 mt-1'>✦</span>
                      <p className='text-gray-300 leading-relaxed'>
                        <span className='text-blue-300 font-semibold'>
                          미래 진로 준비
                        </span>
                        <br />
                        SW 역량은 모든 분야에서 경쟁력이 됩니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-white/20'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-2xl font-bold text-blue-100'>
                    로봇/코딩교육은 스타랩에서
                  </h3>
                  <div className='text-3xl'>🚀</div>
                </div>
                <div className='space-y-4'>
                  <div className='inline-block px-3 py-1 bg-white/10 rounded-full mb-4'>
                    <p className='text-blue-200 text-sm'>
                      차별화된 교육 시스템
                    </p>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-start space-x-3'>
                      <span className='text-blue-400 mt-1'>✦</span>
                      <p className='text-gray-300 leading-relaxed'>
                        <span className='text-blue-300 font-semibold'>
                          체계적인 커리큘럼
                        </span>
                        <br />
                        6세부터 대입까지 연계된 교육과정
                      </p>
                    </div>
                    <div className='flex items-start space-x-3'>
                      <span className='text-blue-400 mt-1'>✦</span>
                      <p className='text-gray-300 leading-relaxed'>
                        <span className='text-blue-300 font-semibold'>
                          검증된 강사진
                        </span>
                        <br />
                        전원 공학 전공 출신의 전문 강사진
                      </p>
                    </div>
                    <div className='flex items-start space-x-3'>
                      <span className='text-blue-400 mt-1'>✦</span>
                      <p className='text-gray-300 leading-relaxed'>
                        <span className='text-blue-300 font-semibold'>
                          우수한 교육 성과
                        </span>
                        <br />
                        FLL, 로보텍스 등 다수의 수상 실적
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 두 번째 섹션: 흰색 배경 */}
      <div className='bg-gradient-to-b from-white to-gray-300 pt-12 pb-20'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-[16px] font-medium mb-6 text-gray-500 text-center'>
            왜{' '}
            <span className='text-blue-600 text-[22px] font-bold'>
              스타랩 수원
            </span>
            을 선택해야 할까요?
          </h2>
          <p className='text-[32px] font-bold text-gray-500 text-center'>
            <span className='text-blue-600 font-bold'>6세부터 대입</span>까지
          </p>
          <p className='text-[32px] font-bold text-gray-500 mb-16 text-center'>
            체계적인 커리큘럼
          </p>
          <p className='text-[18px] font-bold text-gray-500 text-center'>
            Lego Education 기반 과정부터
            <br />
            대입을 위한 포트폴리오까지
            <br />
            체계적인 교육과정을 제공합니다.
          </p>

          {/* 타임라인 컨테이너 */}
          <div className='relative mt-16 ml-4'>
            {/* 왼쪽에 수직 타임라인 선 */}
            <div className='absolute left-4 top-1 bottom-0 w-1 bg-gray-400'></div>

            {/* 타임라인 항목들 */}
            <div className='space-y-10 ml-10'>
              {/* 항목: 6-7세 */}
              <div className='flex'>
                <div className='relative'>
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 mr-2 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <div className='inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-2'>
                    <h3 className='text-[14px] font-semibold'>6-7세</h3>
                  </div>
                  <p className='text-gray-700 font-bold text-[20px] mb-2'>
                    INNOVATOR • BrickQ
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    물체의 힘과 운동을 직접 탐구하며
                    <br />
                    실험적 사고력을 키우고
                    <br />
                    기초 공학 지식을 자연스럽게 체득하는 과정
                  </p>
                </div>
              </div>

              {/* 항목: 초 1-2 */}
              <div className='flex'>
                <div className='relative'>
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 mr-2 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <div className='inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-2'>
                    <h3 className='text-[14px] font-semibold'>초 1-2</h3>
                  </div>
                  <p className='text-gray-700 font-bold text-[20px] mb-2'>
                    Spike Essential
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    실용적인 로봇/코딩 교육으로
                    <br />
                    창의력과 논리력을 키우고
                    <br />
                    모든 학습의 성공 기반을 만드는 과정
                  </p>
                </div>
              </div>

              {/* 항목: 초 3-5 */}
              <div className='flex'>
                <div className='relative'>
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 mr-2 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <div className='inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-2'>
                    <h3 className='text-[14px] font-semibold'>초 3-5</h3>
                  </div>
                  <p className='text-gray-700 font-bold text-[20px] mb-2'>
                    Spike Prime
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    복잡한 로봇 설계와 알고리즘을 학습하고
                    <br />
                    문제 해결 능력과 실전 응용력을 키우는 과정
                  </p>
                </div>
              </div>

              {/* 항목: 초6 */}
              <div className='flex'>
                <div className='relative'>
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 mr-2 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <div className='inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-2'>
                    <h3 className='text-[14px] font-semibold'>초 6</h3>
                  </div>
                  <p className='text-gray-700 font-bold text-[20px] mb-2'>
                    Python 과정
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    블록 코딩에서 파이썬 코딩으로 전환하며
                    <br />
                    본격적인 S/W 개발 능력을 키우는 과정
                  </p>
                </div>
              </div>

              {/* 항목: 중/고등 */}
              <div className='flex'>
                <div className='relative'>
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 mr-2 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <div className='inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-2'>
                    <h3 className='text-[14px] font-semibold'>중-고등</h3>
                  </div>
                  <p className='text-gray-700 font-bold text-[20px] mb-2'>
                    대입 준비반
                  </p>
                  <div className='flex flex-wrap gap-2 mb-3'>
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'>
                      Python
                    </span>
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'>
                      C
                    </span>
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'>
                      아두이노
                    </span>
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'>
                      자료구조&알고리즘
                    </span>
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'>
                      웹개발
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-2 mb-3'>
                    <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium'>
                      AI 프로젝트
                    </span>
                    <span className='px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium'>
                      해커톤
                    </span>
                  </div>
                  <p className='text-gray-500 text-[11px]'>
                    다양한 프로그래밍 언어 학습과 프로젝트 진행을 통해
                    <br />
                    대입을 위한 포트폴리오를 만들고
                    <br />
                    S/W특기자 전형을 준비하는 과정
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 세 번째 섹션: 수상내역 */}
      <div className='bg-gradient-to-b from-blue-600 via-blue-800 to-black pb-20'>
        {/* 수상 관련 사진들 슬라이드 */}
        <div className='w-full overflow-hidden mb-16 bg-black py-10'>
          <div
            ref={sliderRef}
            className='flex whitespace-nowrap overflow-x-hidden cursor-grab active:cursor-grabbing'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* 이미지 두 번 반복하여 무한 슬라이드 효과 */}
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`수상 사진 ${index + 1}`}
                className='h-[200px] inline-block object-cover'
                draggable='false'
              />
            ))}
          </div>
        </div>

        {/* 기존 수상내역 카드들 */}
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              2024 대회 수상 실적
            </h2>
            <p className='text-blue-200 text-lg'>
              스타랩 수원의 학생들이 이뤄낸 놀라운 성과들
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* FLL Awards */}
            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20'>
                <div className='flex items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-blue-100 mb-2'>
                      First Lego League
                    </h3>
                    <div className='inline-block px-3 py-1 bg-blue-500/20 rounded-full'>
                      <p className='text-blue-200 text-sm'>
                        Outstanding Engineering
                      </p>
                    </div>
                  </div>
                  <img
                    src='/icons/fll_logo.png'
                    alt='FLL'
                    className='w-10 h-10'
                  />
                </div>
                <div className='space-y-3'>
                  <p className='text-blue-200 text-sm'>
                    지O승 · 최O재 · 김O윤 · 송O훈
                  </p>
                  <p className='text-blue-200 text-sm'>
                    채O훈 · 양O영 · 이O빈 · 조O율
                  </p>
                </div>
              </div>
            </div>

            {/* K-로봇대회 */}
            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20'>
                <div className='flex items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-blue-100 mb-2'>
                      K-로봇대회
                    </h3>
                    <div className='inline-block px-3 py-1 bg-blue-500/20 rounded-full'>
                      <p className='text-blue-200 text-sm'>광운대 총장상</p>
                    </div>
                  </div>
                  <img
                    src='/icons/gwuniv.svg'
                    alt='K-로봇대회'
                    className='w-10 h-10'
                  />
                </div>
                <div className='space-y-2'>
                  <p className='text-blue-200 text-sm'>라인트레이싱 부문</p>
                  <p className='text-blue-200 font-semibold'>정O우</p>
                </div>
              </div>
            </div>

            {/* ROBOTEX ASIA 1KG */}
            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20'>
                <div className='flex items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-blue-100 mb-2'>
                      ROBOTEX ASIA
                    </h3>
                    <div className='inline-block px-3 py-1 bg-blue-500/20 rounded-full'>
                      <p className='text-blue-200 text-sm'>1KG 부문 우승</p>
                    </div>
                  </div>
                  <img
                    src='/icons/robotex_logo.png'
                    alt='ROBOTEX ASIA'
                    className='w-10 h-10'
                  />
                </div>
                <div className='space-y-2'>
                  <p className='text-blue-200 font-semibold'>채O영</p>
                </div>
              </div>
            </div>

            {/* ROBOTEX ASIA 3KG */}
            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20'>
                <div className='flex items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-blue-100 mb-2'>
                      ROBOTEX ASIA
                    </h3>
                    <div className='inline-block px-3 py-1 bg-blue-500/20 rounded-full'>
                      <p className='text-blue-200 text-sm'>3KG 부문 우승</p>
                    </div>
                  </div>
                  <img
                    src='/icons/robotex_logo.png'
                    alt='ROBOTEX ASIA'
                    className='w-10 h-10'
                  />
                </div>
                <div className='space-y-2'>
                  <p className='text-blue-200 text-sm'>김O구 · 최O원</p>
                </div>
              </div>
            </div>

            {/* IT 코딩 발명대회 */}
            <div className='group hover:transform hover:scale-105 transition-all duration-300'>
              <div className='bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20'>
                <div className='flex items-center justify-between mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-blue-100 mb-2'>
                      IT 코딩 발명대회
                    </h3>
                    <div className='inline-block px-3 py-1 bg-blue-500/20 rounded-full'>
                      <p className='text-blue-200 text-sm'>은상</p>
                    </div>
                  </div>
                  <div className='text-3xl text-yellow-400'>🏅</div>
                </div>
                <div className='space-y-2'>
                  <p className='text-blue-200 text-sm'>이O혁 · 이O빈 · 채O훈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 체험수업 신청 버튼 */}
      <div className='fixed bottom-4 left-0 right-0 mx-4 md:static md:flex md:justify-center md:mt-8 z-50'>
        <button
          onClick={() =>
            window.open('http://star-lab.co.kr/m/sub01-03-01.php', '_blank')
          }
          className='block w-full bg-blue-700 text-white text-center font-bold py-4 px-6 rounded-lg 
                     hover:bg-blue-800 active:transform active:translate-y-0.5 
                     transition-all duration-150
                     md:inline-block md:w-[240px] md:mb-20 md:text-lg'
        >
          체험수업 신청하기
        </button>
      </div>

      {/* 플로팅 상담 버튼 */}
      <div className='fixed bottom-28 right-4 z-50' ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className='bg-blue-700 text-white text-center py-4 px-4 rounded-full shadow-lg 
                     hover:bg-blue-800 active:transform active:translate-y-0.5 
                     transition-all duration-150 cursor-pointer'
        >
          상담하기
        </button>
        {isDropdownOpen && (
          <div className='absolute flex flex-col items-center space-y-2 bottom-16'>
            <a
              href='http://pf.kakao.com/_XkfxeK'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-yellow-300 text-black py-4 px-4 rounded-full shadow-lg 
                       hover:bg-yellow-400 active:transform active:translate-y-0.5 
                       transition-all duration-150'
            >
              카카오톡
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
