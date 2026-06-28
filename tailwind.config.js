/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Brand palette derived from the SZ Global Solutions templates
        navy: {
          950: '#070b14',
          900: '#0a1019',
          850: '#0c1320',
          800: '#101a2b',
          700: '#16233a',
          600: '#1d2e49',
        },
        gold: {
          DEFAULT: '#e8a33d',
          400: '#f2b955',
          500: '#e8a33d',
          600: '#d18d29',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(232,163,61,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,163,61,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
