// i18n.js (o donde configuras i18n)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        do: "C",
        re: "D",
        mi: "E",
        fa: "F",
        sol: "G",
        la: "A",
        si: "B",
      },
    },
    es: {
      translation: {
        do: "Do",
        re: "Re",
        mi: "Mi",
        fa: "Fa",
        sol: "Sol",
        la: "La",
        si: "Si",
      },
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
