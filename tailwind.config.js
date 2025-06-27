/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Configure these paths to match your project's files
    "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        // Add more custom delays as needed
      },
    },
  },
  plugins: [],
};
