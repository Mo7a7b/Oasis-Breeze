import { initReactI18next } from "react-i18next";
import englishJSON from "./en/translation.json";
import spanishJSON from "./es/translation.json";
import italianJSON from "./it/translation.json";
import frenchJSON from "./fr/translation.json";
import portugueseJSON from "./pt/translation.json";
import germanJSON from "./de/translation.json";
import i18n from "i18next";
const resources = {
  en: { translation: englishJSON },
  es: { translation: spanishJSON },
  it: { translation: italianJSON },
  fr: { translation: frenchJSON },
  pt: { translation: portugueseJSON },
  de: { translation: germanJSON },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
