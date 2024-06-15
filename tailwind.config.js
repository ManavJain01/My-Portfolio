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
        'trans-right':{
          '0%':{ transform: 'translateX(-50px)',
            opacity: '0'
           },
          '100%':{ transform: 'translateX(0)' },
        }
      },
      animation:{
        'trans-right':'trans-right 1.5s ease-in-out'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}