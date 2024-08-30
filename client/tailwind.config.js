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
        },
        // Projects
        'bottom-transition': {
          '0%': { bottom: '-0.5rem' }, // -bottom-5
          '50%': { bottom: '-3rem' },   // -bottom-20
          '100%': { bottom: '-1.75rem', zIndex: '30' }, // -bottom-3
        },
        'bottom-transition-reverse': {
          '0%': { bottom: '-1.75rem', zIndex: '30' }, // -bottom-3 and change z-index
          '50%': { bottom: '-3rem' },   // -bottom-20
          '100%': { bottom: '-0.5rem' } // -bottom-5
        }
      },
      animation: {
        // portfolio-1
        navAnimation: 'navAnimation 1.5s ease-in-out 1',
        // portfolio-2
        "loop-scroll": "loop-scroll 50s linear infinite",
        // Projects
        'bottom-transition': 'bottom-transition 1.5s ease-in-out forwards',
        'bottom-transition-reverse': 'bottom-transition-reverse 1.5s ease-in-out forwards'
      },
      boxShadow: {
        neuMorphism : '-3px -3px 7px #ffffff, 3px 3px 5px #ceced1',
        inset_neuMorphism : 'inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1',
        fullInset_neuMorphism: 'inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1, 3px 3px 5px #ceced1',
        dark_neuMorphism: '2px 2px 5px rgba(0,0,0,0.5), -3px -3px 7px rgba(255,255,255, 0.05)',
        dark_inset_neuMorphism: 'inset 2px 2px 5px rgba(0,0,0,0.5), inset -3px -3px 7px rgba(255,255,255, 0.05)',
        dark_fullInset_neuMorphism: 'inset 2px 2px 5px rgba(0,0,0,0.5), inset -3px -3px 7px rgba(255,255,255, 0.05), -3px -3px 7px rgba(255,255,255, 0.05)',
        clock: '-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94,104,121,0.288)',
        dark_clock: '-3px -3px 7px rgba(0,0,0,0.5), 3px 3px 5px rgba(255,255,255, 0.05)',
        clayMorphism: 'inset -0.6em -0.6em 1em #bfd1ff, inset 0.4em 0.4em 0.5em #eff3ff, 0.8em 0.8em 2em #839ad7',
        reverse_clayMorphism: 'inset -0.6em -0.6em 1em #bfd1ff, inset 0.4em 0.4em 0.5em #eff3ff, 0.8em 0.6em 0.6em -0.3em #839ad7',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}