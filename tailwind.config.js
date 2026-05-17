/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fluff: {
          bg: "#f0f6ff",
          dark: "#0b1829",
          navy: "#1a3a6b",
          sky: "#4ab4e6",
          skyLight: "#a8d8f0",
          accent: "#ff7eb3",
          gold: "#ffd166",
          mint: "#06d6a0",
          purple: "#7b5ea7",
          card: "rgba(255, 255, 255, 0.85)",
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Fredoka One', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'blob': 'blob 8s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'fluff': '0 8px 32px rgba(74, 180, 230, 0.25)',
        'fluff-lg': '0 16px 64px rgba(26, 58, 107, 0.2)',
        'card': '0 4px 24px rgba(26, 58, 107, 0.08)',
        'navy': '0 8px 32px rgba(26, 58, 107, 0.3)',
      }
    },
  },
  plugins: [],
}
