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
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
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
        },
        // Vanilla
        scale: {
          '0%' : {
            width: '150px',
            height: '40px'
          },
        
          '50%' : {
            width: '165px',
            height: '65px',
            fontSize: 'larger'
          },
        
          '100%' : {
            width: '150px',
            height: '40px'
          }
        },
        meta_morph: {
          '0%': { borderRadius: '25%', transform: 'scale(1)' },
          '50%': { borderRadius: '50%', transform: 'scale(1.1)' },
          '100%': { borderRadius: '25%', transform: 'scale(1)' },
        },
        meta_shapeMorph: {
          '0%': { borderRadius: '20%' },
          '25%': { borderRadius: '50%' },
          '50%': { borderRadius: '40% 60% 70% 30% / 50% 20% 80% 50%' }, // Blob-like shape
          '75%': { borderRadius: '30%' },
          '100%': { borderRadius: '20%' },
        },
        meta_colorMorph: {
          '0%, 100%': { background: 'linear-gradient(to right, #9333EA, #1E40AF, #0C4A6E)' },
          '50%': { background: 'linear-gradient(to right, #1E3A8A, #27408B, #2A52BE)' },
        },
      },
      animation: {
        // portfolio-1
        navAnimation: 'navAnimation 1.5s ease-in-out 1',
        // portfolio-2
        "loop-scroll": "loop-scroll 50s linear infinite",
        // Projects
        'bottom-transition': 'bottom-transition 1.5s ease-in-out forwards',
        'bottom-transition-reverse': 'bottom-transition-reverse 1.5s ease-in-out forwards',
        // vanilla
        'scale': 'scale 2s linear infinite',
        meta_morph: 'meta_morph 4s infinite',
        meta_shapeMorph: 'meta_shapeMorph 5s infinite ease-in-out',
        meta_colorMorph: 'meta_colorMorph 8s infinite',
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
        'ai-shadow': '0 2rem 3rem rgba(132, 139, 200, 0.18)',
        'ai-shadow2': '0 0rem 3rem rgba(132, 139, 200, 0.18)',
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.meta_clipPath-diamond': {
          'clip-path': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond shape
        },
      };
      addUtilities(newUtilities);
    },
  ],
}