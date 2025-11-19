/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'raycast-bg': '#F5F5F5',
        'raycast-border': '#EDEDED',
        'raycast-text': '#0C0C0C',
        'raycast-text-secondary': '#6E6E73',
        'raycast-white': '#F5F5F5',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'button': '12px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-long': 'fadeInUp 0.8s ease-out 0.4s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

