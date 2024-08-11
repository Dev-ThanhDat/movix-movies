/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary-font": ["Poppins", "sans-serif"]
      },
      // gradient: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
      colors: {
        primary: "#04152d",
        secondary: "#041226",
        third: "#020c1b",
        "black-lighter": "#C7511F",
        "black-light": "#173d77",
        "pink-color": "#da2f68",
        "orange-color": "#f89e00"
      }
    }
  },
  plugins: []
};
