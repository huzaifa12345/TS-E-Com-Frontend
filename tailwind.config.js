/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E86C24',
          primaryHover: '#D15B17',
          charcoal: '#2C2C2E',
          charcoalDeep: '#1C1C1E',
          background: '#F8F9FA',
          surface: '#FFFFFF',
          text: '#2C2C2E',
          muted: '#6C757D',
          border: '#E5E7EB',
        },
      },
      boxShadow: {
        brand: '0 10px 25px -8px rgba(232, 108, 36, 0.35)',
      },
    },
  },
  plugins: [],
}
