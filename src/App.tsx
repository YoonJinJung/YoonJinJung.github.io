import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div className='relative z-10 p-10 text-left text-white'>
          <p className='text-sm font-bold text-secondary'>레고 로봇 코딩교육</p>
          <h1 className='text-4xl font-bold mb-4'>스타랩 수원</h1>
          <h2 className='text-2xl font-semibold mb-4'>
            미래를 선도하는 코딩 교육의 중심
          </h2>
          <p className='text-sm text-gray-300'>
            안녕하세요! 스타랩 수원센터입니다.
            <br />
            21세기 융합 인재를 위한 최적의 솔루션과
            <br />
            커리큘럼을 기반으로 여러분의 자녀를
            <br />
            창의적인 융합인재로 성장시킬 것을 약속드립니다.
          </p>
          {/* 특징 섹션 */}
          <section className='grid md:grid-cols-3 gap-6 mt-16 mb-12'>
            <div className='border border-white backdrop-blur-md p-6 rounded-2xl shadow-md text-left'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                체계적인 커리큘럼
              </h3>
              <p className='text-gray-300'>
                6세~고등학생
                <br />
                Lego Education 기반 과정부터
                <br />
                대입을 위한 포트폴리오까지
                <br />
                체계적인 교육과정을 제공합니다.
              </p>
            </div>
            <div className='border border-white backdrop-blur-md p-6 rounded-2xl shadow-md text-left'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                최적의 강사진
              </h3>
              <p className='text-gray-300'>
                전부 공학 전공의 강사로 구성되어
                <br />
                전문적인 교육이 가능합니다.
              </p>
            </div>
            <div className='border border-white backdrop-blur-md p-6 rounded-2xl shadow-md text-left'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                최고의 성과
              </h3>
              <p className='text-gray-300'>
                FLL, 로보텍스 코리아 등<br />
                대회 수상 내역은
                <br />
                스타랩의 교육 성과를 증명합니다.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* 두 번째 섹션: 흰색 배경 */}
      <div className='bg-gradient-to-b from-white to-gray-100 py-12'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold mb-6 text-gray-800'>
            커리큘럼 설명
          </h2>
          <div className='bg-white p-6 rounded-lg shadow-md mb-8 mx-8 text-left'>
            <h3 className='text-lg font-semibold mb-2'>6세</h3>
            <p>Innovator 과정</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md mb-8 mx-8 text-left'>
            <h3 className='text-lg font-semibold mb-2'>7세</h3>
            <p>BricQ Essential 과정</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md mb-8 mx-8 text-left'>
            <h3 className='text-lg font-semibold mb-2'>초 1-2 (8-9세)</h3>
            <p>Spike Essential 과정</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md mb-8 mx-8 text-left'>
            <h3 className='text-lg font-semibold mb-2'>초 3-5 (10-12세)</h3>
            <p>Spike Prime 과정</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md mb-8 mx-8 text-left'>
            <h3 className='text-lg font-semibold mb-2'>초6 (13세)</h3>
            <p>Python 과정</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md mb-8 mx-8 text-left'>
            <h3 className='text-lg font-semibold mb-2'>중등 과정 (14-15세)</h3>
            <p>프로그래밍 언어 과정</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md text-left'>
            <h3 className='text-lg font-semibold mb-2'>고등 과정 (16세 -)</h3>
            <p>대입 준비반</p>
          </div>
        </div>
      </div>

      {/* 체험수업 신청 버튼 */}
      <div className='fixed bottom-4 left-0 right-0 mx-4 md:static md:flex md:justify-center md:mt-8 z-50'>
        <a
          href='http://star-lab.co.kr/m/sub01-03-01.php'
          target='_blank'
          rel='noopener noreferrer'
          className='block w-full bg-secondary text-white text-center py-4 px-6 rounded-lg 
                     hover:bg-secondary transition-colors duration-200
                     md:inline-block md:w-[240px] md:text-lg'
        >
          체험수업 신청하기
        </a>
      </div>

      {/* 플로팅 상담 버튼 */}
      <div className='fixed bottom-28 right-4 z-50' ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className='bg-secondary text-white py-4 px-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200'
        >
          상담하기
        </button>
        {isDropdownOpen && (
          <div className='absolute flex flex-col items-center space-y-2 bottom-16'>
            <a
              href='http://pf.kakao.com/_XkfxeK'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-yellow-300 text-black py-4 px-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200'
            >
              카카오톡
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
