/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      darkbg: " hsl(207, 26%, 17%)",
      lightbg: "hsl(0, 0%, 98%)",
      lighttext: "hsl(200, 15%, 8%)",
      darktext: " hsl(0, 0%, 100%)",
      darkelement: "hsl(209, 23%, 22%)",
      lightelement: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {},
//     colors: {
//       darkbg: " hsl(207, 26%, 17%)",
//       lightbg: "hsl(0, 0%, 98%)",
//       lighttext: "hsl(200, 15%, 8%)",
//       darktext: " hsl(0, 0%, 100%)",
//       darkelement: "hsl(209, 23%, 22%)",
//       lightelement: "hsl(0, 0%, 100%)",
//     },
//   },
//   plugins: [],
// });
