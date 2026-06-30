export type Locale = "tr" | "en" | "ar";

/** Bir metnin üç dildeki karşılığı. */
export type Localized = Record<Locale, string>;

export interface MenuVariant {
  /** Porsiyon / adet etiketi (ör. Tam Porsiyon, 5 Şiş). */
  label: Localized;
  /** Türk Lirası cinsinden fiyat. */
  price: number;
}

export type DishTag = "signature" | "spicy" | "new";

export interface MenuItem {
  id: string;
  name: Localized;
  description?: Localized;
  variants: MenuVariant[];
  tag?: DishTag;
}

export interface MenuCategory {
  id: string;
  title: Localized;
  /** Tailwind emoji/ikon yerine basit görsel ipucu. */
  icon: string;
  items: MenuItem[];
}

export interface Branch {
  id: string;
  /** Şube şehri. */
  city: Localized;
  district: Localized;
  address: Localized;
  phone?: string;
  /** Google Maps arama linki. */
  mapQuery: string;
  hours: Localized;
  /** Açılış yılı / kısa not. */
  note: Localized;
  menu: MenuCategory[];
}
