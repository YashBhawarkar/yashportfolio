// file: tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xl2': '1430px', // Custom breakpoint for max-width in experience section
      'navbar': '1024px', // Custom breakpoint from user's HTML
    },
    extend: {
      colors: {
        primary: '#8245ec', // Custom primary color (Purple/Indigo)
        secondary: '#1f2937', // Custom secondary color (Dark Gray)
      }
    },
  },
  plugins: [],
};