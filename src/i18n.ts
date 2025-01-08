import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from "./i18n/en";
import es from "./i18n/es";
import fr from "./i18n/fr";
import it from "./i18n/it";
import pt from "./i18n/pt";
import ro from "./i18n/ro";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en,
  es,
  fr,
  it,
  pt,
  ro,
};

i18n
  .use(LanguageDetector) // Detectar idioma
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    resources,
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'], // Ordem de detecção
      caches: ['localStorage', 'cookie'], // Cache da detecção
    },
  });

  export default i18n;