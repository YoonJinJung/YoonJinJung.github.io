/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // 이 부분이 중요합니다!
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb', // 체험수업 신청 버튼 기본 색상
          700: '#1d4ed8', // 호버 시 색상
        },
        primary: '#343A40',
        secondary: '#007BFF',
        black: '#090909',
      },
      spacing: {
        2: '0.5rem',
        4: '1rem', // p-4에 사용
        6: '1.5rem', // px-6에 사용
      },
      borderRadius: {
        lg: '0.5rem', // rounded-lg에 사용
      },
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        200: '200ms',
      },
      screens: {
        md: '768px', // md: 반응형 브레이크포인트
      },
    },
  },
  plugins: [],
};
