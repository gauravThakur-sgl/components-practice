/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-primary':'#ff0000',
        'red-background': '#ff7b7b',
        'red-border': '#ffbaba'
      },
    },
  },
  plugins: [],
}

