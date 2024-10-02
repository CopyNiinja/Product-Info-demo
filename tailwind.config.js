/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        faiyaz: "#BD6B73"
      },
      fontFamily:{
        sans:["Poppins",'sans']
      }
    },
    screens: {
      'md': '500px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

