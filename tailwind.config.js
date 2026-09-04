/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f172a',
        'brand-blue': '#2563eb',
        'brand-sky': '#0ea5e9',
        'brand-green': '#10b981',
        'brand-amber': '#f59e0b',
        'brand-slate': '#64748b',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
    },
  },
  plugins: [],
}

