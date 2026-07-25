/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f1f8f5',
          100: '#dcefe2',
          200: '#bbddc9',
          300: '#8cc4a6',
          400: '#5aa37c',
          500: '#3a8660',
          600: '#2a6b4a',
          700: '#22543b',
          800: '#1d4430',
          900: '#193728',
          950: '#0c1f17',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3ebdd',
          200: '#e7d6ba',
          300: '#d8bd92',
          400: '#c79e68',
          500: '#bb8850',
          600: '#a87043',
          700: '#8b5839',
          800: '#714834',
          900: '#5d3d2e',
        },
        ember: {
          50: '#fef6ed',
          100: '#fce8cf',
          200: '#facd9c',
          300: '#f7ab61',
          400: '#f4832f',
          500: '#ec6411',
          600: '#cc4c0a',
          700: '#a83a0c',
          800: '#883013',
          900: '#6f2813',
        },
        sky: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce6ff',
          300: '#8ed6ff',
          400: '#59bdff',
          500: '#339eff',
          600: '#1b7df5',
          700: '#1466e1',
          800: '#1652b6',
          900: '#18468f',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
