import { useTranslation } from "react-i18next";
import type { Locale, Localized } from "../types";

/**
 * Veri içindeki çok dilli (Localized) alanları aktif dile çözer.
 * UI metinleri için react-i18next; veri metinleri için bu hook kullanılır.
 */
export function useLocalized() {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.slice(0, 2) as Locale) || "tr";
  const safeLang: Locale = ["tr", "en", "ar"].includes(lang) ? lang : "tr";
  return (value: Localized): string => value[safeLang] ?? value.tr;
}
