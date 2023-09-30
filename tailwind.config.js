/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "public-sans": "public-sans",
      },
      colors: {
        primary: {
          "dark-blue": "#2d314d",
          "lime-green": "#31d35c",
          "bright-cyan": "#2bb7da",
        },
        neutral: {
          "grayish-blue": "#9698a6",
          "light-grayish-blue": "	#f3f4f6",
          "very-light-gray": "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
