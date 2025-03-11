"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./langs/en.json";
import tr from "./langs/tr.json";
import fr from "./langs/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      fr: { translation: fr },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
