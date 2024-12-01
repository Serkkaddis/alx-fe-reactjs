/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify paths to purge unused styles
  darkMode: 'class', // Enable class-based dark mode ('media' for media-query-based)
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom primary color
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'], // Extend variants for hover and focus
      opacity: ['disabled'], // Example: Add disabled variant for opacity
    },
  },
  plugins: [],
};
