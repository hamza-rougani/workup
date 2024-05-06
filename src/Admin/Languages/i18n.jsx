import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";
import ar from './ar.json'
import fr from './fr.json'
const resources = {
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng:localStorage.getItem('lan') ? "fr" : "ar",
    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;