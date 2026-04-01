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
        page: '#f5f4f0',
        muted: '#eceae4',
        primary: '#1a1a1a',
        secondary: '#4a5568',
        accent: {
          DEFAULT: '#1a3a5c',
          hover: '#152d47',
        },
        guarantee: {
          DEFAULT: '#16a34a',
          bg: '#f0fdf4',
          border: '#bbf7d0',
        },
        star: '#f0a500',
        card: {
          border: '#e2e8f0',
        },
        divider: '#e2e8f0',
        nav: '#0a0a0a',
        brand: {
          dark: '#0a0a0a',
          bg: '#eceae4',
          border: '#e2e8f0',
          secondary: '#4a5568',
          star: '#f0a500',
        },
      },
      maxWidth: {
        container: '1100px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
export default config
