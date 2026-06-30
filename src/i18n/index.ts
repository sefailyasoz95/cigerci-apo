import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import tr from "./locales/tr.json";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED_LANGS = [
  { code: "tr", label: "Türkçe", short: "TR", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
] as const;

export type LangCode = (typeof SUPPORTED_LANGS)[number]["code"];

export const dirForLang = (lng: string): "ltr" | "rtl" =>
  lng.startsWith("ar") ? "rtl" : "ltr";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "tr",
    supportedLngs: ["tr", "en", "ar"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

/** <html> lang & dir özniteliklerini aktif dile göre günceller. */
const applyDir = (lng: string) => {
  const dir = dirForLang(lng);
  document.documentElement.setAttribute("lang", lng);
  document.documentElement.setAttribute("dir", dir);
};

applyDir(i18n.language);
i18n.on("languageChanged", applyDir);

export default i18n;
