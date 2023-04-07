/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        Hero: "url('assets/pizzadelivery.png')",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

