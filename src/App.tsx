import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 헤더 섹션 */}
      <header className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <img
            src='/logo_main.png'
            alt='스타랩 코딩교육'
            className='h-12 md:h-16'
          />
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className='container mx-auto px-4 py-8'>
        {/* 소개 섹션 */}
        <section className='mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            미래를 선도하는 코딩교육의 중심
          </h1>
          <p className='text-lg text-gray-600 mb-6'>
            스타랩은 초등학생부터 고등학생까지 체계적인 코딩 교육을 제공합니다.
          </p>
        </section>

        {/* 특징 섹션 */}
        <section className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-3'>맞춤형 교육</h3>
            <p className='text-gray-600'>
              학생의 수준과 목표에 맞는 1:1 맞춤형 교육을 제공합니다.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-3'>전문 강사진</h3>
            <p className='text-gray-600'>
              현직 개발자 출신의 전문 강사진이 직접 교육합니다.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-3'>체계적 커리큘럼</h3>
            <p className='text-gray-600'>
              기초부터 실전 프로젝트까지 체계적인 커리큘럼을 제공합니다.
            </p>
          </div>
        </section>

        {/* 교육 과정 섹션 */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold mb-6'>교육 과정</h2>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <ul className='space-y-4'>
              <li className='flex items-center'>
                <span className='w-32 font-semibold'>초등부</span>
                <span>스크래치, 엔트리를 통한 코딩 기초</span>
              </li>
              <li className='flex items-center'>
                <span className='w-32 font-semibold'>중등부</span>
                <span>파이썬 기초/심화, 알고리즘 기초</span>
              </li>
              <li className='flex items-center'>
                <span className='w-32 font-semibold'>고등부</span>
                <span>자바, 알고리즘 심화, 실전 프로젝트</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* 체험수업 신청 버튼 */}
      <div className='fixed bottom-4 left-0 right-0 mx-4 md:static md:flex md:justify-center md:mt-8'>
        <a
          href='http://star-lab.co.kr/m/sub01-03-01.php'
          target='_blank'
          rel='noopener noreferrer'
          className='block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg 
                     hover:bg-blue-700 transition-colors duration-200
                     md:inline-block md:w-[240px] md:text-lg'
        >
          체험수업 신청
        </a>
      </div>
    </div>
  );
}

export default App;
