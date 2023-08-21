/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      colors: {
        dark_blue: "hsl(240, 38%, 20%)",
        grayish_blue: "hsl(240, 18%, 77%)",
      },
    },
  },
  plugins: [],
};
