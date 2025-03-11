"use client";

import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";

export default function useLocales() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [dir, setDir] = useState<"rtl" | "ltr">("ltr");

  const allLangs = [
    { name: "English", alias: "en", icon: "/pictures/flags/uk.svg" },
    { name: "Turkey", alias: "tr", icon: "/pictures/flags/tr.svg" },
    { name: "France", alias: "fr", icon: "/pictures/flags/fr.svg" },
    // { name: "Farsi", alias: "ir", icon: "/pictures/flags/ir.svg" },
  ];

  // Function to safely get language from localStorage
  const getStoredLang = useCallback(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("i18nextLng") || "en";
    }
    return "en"; // Default to English on server
  }, []);

  // Change language function
  const onChangeLang = useCallback(
    (newLang: string) => {
      if (newLang !== currentLang) {
        i18n.changeLanguage(newLang);
        localStorage.setItem("i18nextLng", newLang);
        setCurrentLang(newLang);
        setDir(newLang === "ar" || newLang === "fa" ? "rtl" : "ltr");
      }
    },
    [i18n, currentLang]
  );

  // Initialize language
  useEffect(() => {
    const lng = getStoredLang();
    if (lng !== i18n.language) {
      i18n.changeLanguage(lng);
    }
    setCurrentLang(lng);
    setDir(lng === "ar" || lng === "fa" ? "rtl" : "ltr");
  }, [i18n, getStoredLang]);

  return {
    allLangs,
    t,
    currentLang,
    onChangeLang,
    dir,
  };
}
