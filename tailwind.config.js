/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}",
    "./components/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Nunito-4": [
          ["Nunito Sans", "sans-serif"],
          {
            fontWeight: 400,
            fontStyle: "normal",
          },
        ],
      },
      fontSize: {
        btn: [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        select: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        link: [
          "18px",
          {
            lineHeight: "25px",
            fontWeight: "600",
          },
        ],
        subTitle: [
          "24px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        title: [
          "32px",
          {
            lineHeight: "38px",
            fontWeight: "800",
          },
        ],
      },
      colors: {
        Neptune: "#1A3E3E",
        Honey: "#F2BE22",
        Black: "#18121E",
        White: "#FDFDFD",
        Gray: "#E1E3E4",
      },
      boxShadow: {
        select: "0 0 10px 100px #255252 inset",
      },
    },
  },
  plugins: [],
};
