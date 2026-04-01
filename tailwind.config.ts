import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a0a0a',
          bg: '#f7f8fa',
          border: '#e2e8f0',
          secondary: '#4a5568',
          star: '#f0a500',
        },
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
}
export default config
