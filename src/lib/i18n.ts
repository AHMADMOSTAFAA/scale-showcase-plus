import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // load translations from public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // bind with React
  .init({
    fallbackLng: "en",
    lng:"en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // 👈 matches your folder
    },
  });

export default i18n;
