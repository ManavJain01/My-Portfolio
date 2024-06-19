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
        // portfolio-1
        navAnimation: {
          '0%': { translate: '0% -100%' },
          '100%': { translate: '0% 0%' },
        },
        // portfolio-2
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      },
      animation: {
        // portfolio-1
        navAnimation: 'navAnimation 1.5s ease-in-out 1',
        // portfolio-2
        "loop-scroll": "loop-scroll 50s linear infinite"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}