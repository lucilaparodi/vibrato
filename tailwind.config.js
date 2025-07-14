/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1330px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 4s linear infinite", // 4s es solo un ejemplo
      },

      fontFamily: {
        comfortaa: ['"Comfortaa"', "sans-serif"], // Configuración para Comfortaa
        lafleur: ['"lafleur-wide"', "serif"], // Configuración para Lafleur
      },
      colors: {
        red: "#b03f5b",
        peach: {
          DEFAULT: "#F4C39B",
          400: "#F2B88C",
          500: "#F4C39B",
          600: "#D99E72",
        },
        blue: {
          DEFAULT: "#32598E",
          400: "#3B82F6",
          500: "#32598E",
          600: "#1E3A8A",
        },
        white: "#FFFFFF", // Blanco
      },
      fontSize: {
        heading: ["20px", "32px"], // Sobrescribe el tamaño de 2xl
        "2xs": ["10px", "14px"], // Tamaño muy pequeño para texto con un alto de línea
      },
      brightness: {
        115: "1.15", // Nuevo valor para brillo personalizado
      },
      borderRadius: {
        "4xl": "30px", // Define un valor más grande que 3xl
      },
    },
  },
  plugins: [],
};
