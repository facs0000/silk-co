import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1322',
          card: '#131829',
        },
        coral: '#e05a4b',
        amber: '#eaa232',
        cream: '#f4f0e8',
        muted: '#9aa0b8',
        hint: '#7a8099',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['var(--font-righteous)', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        impact: ['var(--font-unbounded)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
