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
          dark: '#02356b',
          navy: '#263c56',
          blue: '#1c5c9f',
          'mid-blue': '#10447c',
          'light-blue': '#2595cd',
          cyan: '#08c9ef',
          'bright-cyan': '#0baac9',
          'faq-blue': '#167fb3',
          gold: '#ddc07f',
          'gold-dark': '#b9944f',
          'gold-light': '#ebc268',
          'gold-mid': '#c59d51',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
