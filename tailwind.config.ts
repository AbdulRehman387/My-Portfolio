import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "mobile": {'max': '639px'},
      "tablet": {'min': '640px', 'max': '950px'},
      "laptop": {'min': '951px', 'max': '1325px'},
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        portfolio: ["Montserrat"]
      },
      colors:{
        "red": "#FC3314",
        "pink": "#FFD4D0",
        "dark": "#1F1F1F",
        "grey": "#F7F7F7"
      }
    },
  },
  plugins: [],
};
export default config;
