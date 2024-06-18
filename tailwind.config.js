import { TbTransitionRight } from 'react-icons/tb';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '431px'
      },
      keyframes: {
        navAnimation: {
          '0%': { translate: '0% -100%' },
          '100%': { translate: '0% 0%' },
        }
      },
      animation: {
        navAnimation: 'navAnimation 1.5s ease-in-out 1',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}