/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals — warm, like paper and charcoal
        ink: {
          DEFAULT: '#14130F',
          950: '#0C0B09',
          900: '#14130F',
          800: '#1F1D19',
          700: '#2E2B25',
          600: '#4A463E',
          500: '#6B655A',
          400: '#938B7D',
          300: '#B9B1A3',
        },
        paper: '#F7F4EE',
        sand: '#EFE9DE',
        line: '#E3DBCD',
        // The one accent — Linework amber
        brand: {
          50: '#FDF6EA',
          100: '#FAE9C9',
          300: '#F2C46F',
          DEFAULT: '#E8A33D',
          600: '#C9821F',
          700: '#94590C', // AA on paper for small text
          800: '#6E4208',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid display sizes so headlines scale smoothly from phone to desktop
        'display-xl': ['clamp(2.6rem, 7vw + 0.5rem, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.1rem, 4.5vw + 0.5rem, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.7rem, 2.6vw + 0.6rem, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        site: '80rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,19,15,0.04), 0 8px 24px -8px rgba(20,19,15,0.10)',
        float: '0 24px 48px -12px rgba(20,19,15,0.25)',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        kenburns: { from: { transform: 'scale(1.12)' }, to: { transform: 'scale(1)' } },
        wipe: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
        scan: {
          from: { left: '0%', opacity: '1' },
          '92%': { opacity: '1' },
          to: { left: '100%', opacity: '0' },
        },
        draw: { to: { strokeDashoffset: '0' } },
        'scroll-cue': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 38s linear infinite',
        kenburns: 'kenburns 9s cubic-bezier(0.22, 1, 0.36, 1) both',
        wipe: 'wipe 1.5s cubic-bezier(0.77, 0, 0.18, 1) 0.9s both',
        scan: 'scan 1.5s cubic-bezier(0.77, 0, 0.18, 1) 0.9s both',
        draw: 'draw 1.4s ease-out both',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
