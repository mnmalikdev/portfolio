module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      xxs: "0px",
      xs: "250px",
      s: "350px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1369px",
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans"],
      poppins: ["Poppins"],
    },
    fontSize: {
      h1: ["4rem", "4.6rem"],
      h2: ["3rem", "60px"],
      h3: ["2.2rem", "50px"],
      h4: ["18px", "27px"],
      li: ["1.3rem", "2rem"],
      bodyTitleBig: ["24px", "36px"],
      bodyTitleSmall: ["18px", "24px"],
      body1: ["16px", "22px"],
      body2: ["14px", "20px"],
      paragraph: ["2.2rem", "44px"],
      paraGraphMedium: ["25px", "36px"],
      caption: ["12px", "16px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      dark: "#3a4660",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
      primary: "#1d53ff",
      paraColor: "#001455",
    },

    variants: {
      extend: {},
    },
  },
};
