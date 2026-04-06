/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D10',
        surface: '#11151A',
        'surface-alt': '#161B22',
        primary: '#F5F7FA',
        secondary: '#98A2B3',
        'accent-blue': '#4CC9F0',
        'accent-violet': '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-md': ['52px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        section: ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        eyebrow: ['12px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
      },
      borderRadius: {
        card: '20px',
        'card-sm': '14px',
      },
      boxShadow: {
        card: '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.6)',
        'glow-blue': '0 0 40px rgba(76,201,240,0.18)',
        'glow-violet': '0 0 40px rgba(124,58,237,0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
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
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
