/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work: ["WorkSans", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
      },
      screens: {
        sm: "375px",
        lg: "1240px", // Desktop design reference
      },
      maxWidth: {
        container: "1440px", // Restrict max width on large screens
      },
    },
  },
  plugins: [],
};
