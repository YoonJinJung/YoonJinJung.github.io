import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';

export default function CodingClass() {
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
          <div className='relative mt-16 ml-10'>
            {/* 왼쪽에 수직 타임라인 선 */}
            <div className='absolute left-4 top-1 bottom-0 w-1 bg-gray-400'></div>

            {/* 타임라인 항목들 */}
            <div className='space-y-10 ml-10'>
              {/* 항목: 6-7세 */}
              <div className='flex'>
                <div className='relative'>
                  {/* 바깥쪽 원: 파란색 배경, 두꺼운 테두리 역할 (두께 약 4px) */}
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    {/* 안쪽 원: 기존 회색 점 */}
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    6-7세
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    INNOVATOR | BrickQ
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    물체의 힘과 운동을 직접 탐구하며 실험적 사고력을 키우고
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    초 1-2
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    Spike Essential
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    실용적인 로봇/코딩 교육으로 창의력과 논리력을 키우고
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    초 3-5
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    Spike Prime
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    복잡한 로봇 설계와 알고리즘을 학습하고
                    <br />
                    창의적인 문제 해결 능력과 실전 응용력을 키우는 과정
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    초 6
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    Python 과정
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    블록 코딩에서 파이썬 코딩으로 전환하며
                    <br />
                    본격적인 프로그래밍 언어와 S/W 개발 능력을 키우는 과정
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    중-고등
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    대입 준비반
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    다양한 프로그래밍 언어 학습과 프로젝트 진행을 통해
                    <br />
                    대입을 위한 포트폴리오를 만들어 S/W특기자 전형을 준비하는
                    과정
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-gray-300 to-blue-500 py-12'>
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
          <div className='relative mt-16 ml-10'>
            {/* 왼쪽에 수직 타임라인 선 */}
            <div className='absolute left-4 top-1 bottom-0 w-1 bg-gray-400'></div>

            {/* 타임라인 항목들 */}
            <div className='space-y-10 ml-10'>
              {/* 항목: 6-7세 */}
              <div className='flex'>
                <div className='relative'>
                  {/* 바깥쪽 원: 파란색 배경, 두꺼운 테두리 역할 (두께 약 4px) */}
                  <div className='w-[21px] h-[21px] rounded-full flex items-center justify-center absolute left-[-2.03rem] bg-blue-500'>
                    {/* 안쪽 원: 기존 회색 점 */}
                    <div className='w-[13px] h-[13px] bg-gray-400 rounded-full'></div>
                  </div>
                </div>
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    6-7세
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    INNOVATOR | BrickQ
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    물체의 힘과 운동을 직접 탐구하며 실험적 사고력을 키우고
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    초 1-2
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    Spike Essential
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    실용적인 로봇/코딩 교육으로 창의력과 논리력을 키우고
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    초 3-5
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    Spike Prime
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    복잡한 로봇 설계와 알고리즘을 학습하고
                    <br />
                    창의적인 문제 해결 능력과 실전 응용력을 키우는 과정
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    초6
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    Python 과정
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    블록 코딩에서 파이썬 코딩으로 전환하며
                    <br />
                    본격적인 프로그래밍 언어와 S/W 개발 능력을 키우는 과정
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
                <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md ml-2'>
                  <h3 className='text-lg text-blue-600 font-semibold mb-2'>
                    중/고등
                  </h3>
                  <p className='text-gray-700 font-bold text-[18px] mb-2'>
                    대입 준비반
                  </p>
                  <p className='text-gray-500 text-[11px]'>
                    다양한 프로그래밍 언어 학습과 프로젝트 진행을 통해
                    <br />
                    대입을 위한 포트폴리오를 만들어 S/W특기자 전형을 준비하는
                    과정
                  </p>
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
                     md:inline-block md:w-[240px] md:text-lg'
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
