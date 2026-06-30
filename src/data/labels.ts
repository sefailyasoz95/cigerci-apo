import type { Localized } from "../types";

/** Menüde tekrar eden porsiyon/adet etiketleri. */
export const L = {
  full: { tr: "Tam Porsiyon", en: "Full Portion", ar: "حصة كاملة" },
  half: { tr: "Yarım Porsiyon", en: "Half Portion", ar: "نصف حصة" },
  piece: { tr: "1 Adet", en: "1 Piece", ar: "قطعة واحدة" },
  skewers5: { tr: "5 Şiş", en: "5 Skewers", ar: "5 أسياخ" },
  skewers10: { tr: "10 Şiş", en: "10 Skewers", ar: "10 أسياخ" },
  skewer1: { tr: "1 Şiş", en: "1 Skewer", ar: "سيخ واحد" },
  skewers2: { tr: "2 Şiş", en: "2 Skewers", ar: "سيخان" },
  portion: { tr: "Porsiyon", en: "Portion", ar: "حصة" },
  // İzmir menüsü için ek etiketler
  durum: { tr: "Dürüm", en: "Wrap", ar: "لفة" },
  somun: { tr: "Somun Ekmek", en: "On Somun Bread", ar: "بخبز الصمون" },
  yogurtlu: { tr: "Yoğurtlu", en: "With Yogurt", ar: "بالزبادي" },
  servis: { tr: "Servis", en: "Plated", ar: "بطبق" },
  addon: { tr: "İlave", en: "Add-on", ar: "إضافة" },
  liters5: { tr: "5 Lt", en: "5 L", ar: "5 لتر" },
  slices4: { tr: "4 Dilim", en: "4 Pieces", ar: "4 قطع" },
} satisfies Record<string, Localized>;

/** Gramaj bilgisi içeren porsiyon etiketi üretir. */
export const grLabel = (kind: "full" | "half", gr?: number): Localized => {
  const base = kind === "full" ? L.full : L.half;
  if (!gr) return base;
  return {
    tr: `${base.tr} · ${gr} gr`,
    en: `${base.en} · ${gr} g`,
    ar: `${base.ar} · ${gr} غ`,
  };
};
