import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./locale/translations";
import localStorageKeys from "@/localstorage-keys.ts";

i18n.use(initReactI18next).init({
  // CORRECTED: Default language is now English
  lng: localStorage.getItem(localStorageKeys.LANGUAGE) ?? "en",
  // CORRECTED: Fallback language is also English
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: translations,
});

export default i18n;