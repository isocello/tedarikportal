/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#198754",
        darkGreen: "#14532d",
        lightGreen: "#d1e7dd"
      },
    },
  },
  plugins: [],
}
