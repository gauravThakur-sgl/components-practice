/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-primary': '#009ef7',
        'btn-primary-hover': '#009ec9',
        'red-primary':'#ff0000',
        'red-background': '#ff7b7b',
        'red-border': '#ffbaba'
      },
    },
  },
  plugins: [],
}

