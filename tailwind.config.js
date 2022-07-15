module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans"],
      poppins: ["Poppins"],
    },
    fontSize: {
      h1: ["4rem", "70px"],
      h2: ["3rem", "60px"],
      h3: ["2.2rem", "50px"],
      h4: ["18px", "27px"],
      bodyTitleBig: ["24px", "36px"],
      bodyTitleSmall: ["18px", "24px"],
      body1: ["16px", "22px"],
      body2: ["14px", "20px"],
      caption: ["12px", "16px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
      primary: "#1d53ff",
    },

    variants: {
      extend: {},
    },
  },
};
