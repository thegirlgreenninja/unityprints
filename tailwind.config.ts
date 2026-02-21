import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: { 900: '#18181B', 950: '#09090B' },
        lane: {
          twitch: '#8B5CF6', art: '#E11D48', tech: '#EA580C',
          sewing: '#10B981', bim: '#3B82F6', print: '#14B8A6',
        }
      },
      animation: { 'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      }
    },
  },
  plugins: [],
}
export default config
