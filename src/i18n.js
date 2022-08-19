import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


// Importing translation files

import en from "./assets/i18n/translations/en.json";
import fr from "./assets/i18n/translations/fr.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // lng:"en", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;