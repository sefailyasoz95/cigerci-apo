import type { Branch, MenuCategory } from "../types";
import { L, grLabel } from "./labels";

/* -------------------------------------------------------------------------- */
/*  Ortak menü öğeleri — Ankara şubesi sitedeki menüden birebir alınmıştır.    */
/*  İzmir şubesi temsilî olarak aynı çekirdek menüyü kullanır (menu.pdf).       */
/* -------------------------------------------------------------------------- */

const skewers = (priceFull: number, priceHalf: number): MenuCategory => ({
  id: "skewers",
  title: { tr: "Şişler", en: "Skewers", ar: "الأسياخ" },
  icon: "🔥",
  items: [
    {
      id: "ciger-sis",
      name: { tr: "Ciğer Şiş", en: "Liver Skewer", ar: "سيخ كبد" },
      description: {
        tr: "Közde, baharatıyla; Apo'nun imza lezzeti.",
        en: "Char-grilled over embers with house spices — Apo's signature.",
        ar: "مشوي على الجمر مع بهارات البيت — توقيع آبو.",
      },
      tag: "signature",
      variants: [
        { label: L.full, price: priceFull },
        { label: L.skewers5, price: priceHalf },
      ],
    },
    {
      id: "cop-sis",
      name: { tr: "Çöp Şiş", en: "Çöp Şiş (Thin Skewer)", ar: "شيش الأعواد" },
      variants: [
        { label: L.full, price: priceFull },
        { label: L.half, price: priceHalf },
      ],
    },
    {
      id: "yurek-sis",
      name: { tr: "Yürek Şiş", en: "Heart Skewer", ar: "سيخ قلب" },
      variants: [
        { label: L.full, price: priceFull - 50 },
        { label: L.skewers5, price: priceHalf },
      ],
    },
    {
      id: "tavuk-sis",
      name: { tr: "Tavuk Şiş", en: "Chicken Skewer", ar: "سيخ دجاج" },
      variants: [
        { label: L.full, price: priceFull - 100 },
        { label: L.skewers2, price: priceHalf },
      ],
    },
    {
      id: "tavuk-kanat",
      name: { tr: "Tavuk Kanat", en: "Chicken Wings", ar: "أجنحة دجاج" },
      variants: [
        { label: L.full, price: priceFull - 50 },
        { label: L.skewer1, price: priceHalf },
      ],
    },
    {
      id: "karisik",
      name: { tr: "Karışık", en: "Mixed Grill", ar: "مشكل مشاوي" },
      tag: "signature",
      variants: [{ label: L.full, price: priceFull }],
    },
  ],
});

const kebabs: MenuCategory = {
  id: "kebabs",
  title: { tr: "Kebaplar", en: "Kebabs", ar: "الكبابات" },
  icon: "🍢",
  items: [
    {
      id: "adana",
      name: { tr: "Adana Kebap", en: "Adana Kebab", ar: "كباب أضنة" },
      tag: "spicy",
      variants: [
        { label: L.full, price: 790 },
        { label: L.skewer1, price: 550 },
      ],
    },
    {
      id: "urfa",
      name: { tr: "Urfa Kebap", en: "Urfa Kebab", ar: "كباب أورفة" },
      variants: [
        { label: L.full, price: 790 },
        { label: L.half, price: 550 },
      ],
    },
    {
      id: "patlicanli",
      name: { tr: "Patlıcanlı Kebap", en: "Eggplant Kebab", ar: "كباب باذنجان" },
      variants: [
        { label: L.full, price: 815 },
        { label: L.skewer1, price: 670 },
      ],
    },
    {
      id: "beyti",
      name: { tr: "Beyti / Izgara Köfte", en: "Beyti / Grilled Meatballs", ar: "بيتي / كفتة مشوية" },
      variants: [
        { label: L.full, price: 815 },
        { label: L.portion, price: 670 },
      ],
    },
    {
      id: "icli-kofte",
      name: { tr: "İçli Köfte", en: "Stuffed Meatball", ar: "كبة" },
      variants: [{ label: L.piece, price: 150 }],
    },
  ],
};

const tantuni: MenuCategory = {
  id: "tantuni",
  title: { tr: "Tantuni", en: "Tantuni", ar: "التنتوني" },
  icon: "🌯",
  items: [
    {
      id: "et-tantuni-durum",
      name: { tr: "Et Tantuni Dürüm", en: "Beef Tantuni Wrap", ar: "لفة تنتوني لحم" },
      tag: "signature",
      variants: [{ label: L.portion, price: 420 }],
    },
    {
      id: "et-somun-tantuni",
      name: { tr: "Et Somun Ekmek Tantuni", en: "Beef Tantuni on Somun Bread", ar: "تنتوني لحم بخبز الصمون" },
      variants: [{ label: L.portion, price: 450 }],
    },
    {
      id: "tavuk-tantuni-durum",
      name: { tr: "Tavuk Tantuni Dürüm", en: "Chicken Tantuni Wrap", ar: "لفة تنتوني دجاج" },
      variants: [{ label: L.portion, price: 395 }],
    },
    {
      id: "somun-tavuk-tantuni",
      name: { tr: "Somun Ekmek Tavuk Tantuni", en: "Chicken Tantuni on Somun Bread", ar: "تنتوني دجاج بخبز الصمون" },
      variants: [{ label: L.portion, price: 420 }],
    },
    {
      id: "yogurtlu-et-tantuni",
      name: { tr: "Yoğurtlu Et Tantuni", en: "Beef Tantuni with Yogurt", ar: "تنتوني لحم بالزبادي" },
      variants: [{ label: L.portion, price: 530 }],
    },
    {
      id: "yogurtlu-tavuk-tantuni",
      name: { tr: "Yoğurtlu Tavuk Tantuni", en: "Chicken Tantuni with Yogurt", ar: "تنتوني دجاج بالزبادي" },
      variants: [{ label: L.portion, price: 480 }],
    },
  ],
};

const starters: MenuCategory = {
  id: "starters",
  title: { tr: "Başlangıç & Yanlar", en: "Starters & Sides", ar: "المقبلات والأطباق الجانبية" },
  icon: "🥣",
  items: [
    {
      id: "mercimek",
      name: { tr: "Mercimek Çorbası", en: "Lentil Soup", ar: "شوربة عدس" },
      variants: [{ label: L.portion, price: 150 }],
    },
    {
      id: "patates",
      name: { tr: "Patates Kızartması", en: "French Fries", ar: "بطاطس مقلية" },
      variants: [{ label: L.portion, price: 75 }],
    },
  ],
};

const desserts: MenuCategory = {
  id: "desserts",
  title: { tr: "Tatlılar", en: "Desserts", ar: "الحلويات" },
  icon: "🍮",
  items: [
    {
      id: "kunefe",
      name: { tr: "Künefe", en: "Künefe", ar: "كنافة" },
      tag: "signature",
      variants: [{ label: L.portion, price: 250 }],
    },
    {
      id: "kunefe-dondurmali",
      name: { tr: "Künefe (Dondurmalı)", en: "Künefe with Ice Cream", ar: "كنافة بالآيس كريم" },
      variants: [{ label: L.portion, price: 300 }],
    },
    {
      id: "baklava",
      name: { tr: "Havuç Dilim Baklava", en: "Carrot-Slice Baklava", ar: "بقلاوة جزرية" },
      variants: [{ label: L.portion, price: 240 }],
    },
    {
      id: "baklava-dondurmali",
      name: { tr: "Baklava (Dondurmalı)", en: "Baklava with Ice Cream", ar: "بقلاوة بالآيس كريم" },
      variants: [{ label: L.portion, price: 290 }],
    },
    {
      id: "dondurma",
      name: { tr: "Dondurma", en: "Ice Cream", ar: "آيس كريم" },
      variants: [{ label: L.piece, price: 50 }],
    },
  ],
};

const drinks: MenuCategory = {
  id: "drinks",
  title: { tr: "İçecekler", en: "Drinks", ar: "المشروبات" },
  icon: "🥤",
  items: [
    { id: "cola", name: { tr: "Cola", en: "Cola", ar: "كولا" }, variants: [{ label: L.piece, price: 100 }] },
    { id: "fanta", name: { tr: "Fanta", en: "Fanta", ar: "فانتا" }, variants: [{ label: L.piece, price: 100 }] },
    { id: "meyve-suyu", name: { tr: "Meyve Suyu", en: "Fruit Juice", ar: "عصير فواكه" }, variants: [{ label: L.piece, price: 100 }] },
    { id: "ayran", name: { tr: "Ayran", en: "Ayran", ar: "عيران" }, variants: [{ label: L.piece, price: 100 }] },
    { id: "yayik-ayran", name: { tr: "Yayık Ayran", en: "Churned Ayran", ar: "عيران مخيض" }, variants: [{ label: L.piece, price: 100 }] },
    { id: "salgam", name: { tr: "Şalgam", en: "Şalgam (Turnip Juice)", ar: "شلغم" }, variants: [{ label: L.piece, price: 100 }] },
    { id: "limonlu-soda", name: { tr: "Limonlu Soda", en: "Lemon Soda", ar: "صودا بالليمون" }, variants: [{ label: L.piece, price: 40 }] },
    { id: "soda", name: { tr: "Soda", en: "Sparkling Water", ar: "صودا" }, variants: [{ label: L.piece, price: 30 }] },
    { id: "su", name: { tr: "Su", en: "Water", ar: "ماء" }, variants: [{ label: L.piece, price: 20 }] },
  ],
};

/** Ankara & İzmir tam menüsü. */
const fullMenu = (full: number, half: number): MenuCategory[] => [
  skewers(full, half),
  kebabs,
  tantuni,
  starters,
  desserts,
  drinks,
];

/* -------------------------------------------------------------------------- */
/*  İstanbul (Ataşehir) — sitedeki menüden birebir, daha kısa liste.           */
/* -------------------------------------------------------------------------- */

const istanbulMenu: MenuCategory[] = [
  {
    id: "skewers",
    title: { tr: "Şişler", en: "Skewers", ar: "الأسياخ" },
    icon: "🔥",
    items: [
      {
        id: "ciger-sis",
        name: { tr: "Ciğer Şiş", en: "Liver Skewer", ar: "سيخ كبد" },
        tag: "signature",
        variants: [
          { label: L.skewers10, price: 750 },
          { label: L.skewers5, price: 550 },
        ],
      },
      {
        id: "cop-sis",
        name: { tr: "Çöp Şiş", en: "Çöp Şiş (Thin Skewer)", ar: "شيش الأعواد" },
        variants: [
          { label: L.skewers10, price: 750 },
          { label: L.skewers5, price: 550 },
        ],
      },
      {
        id: "yurek-sis",
        name: { tr: "Yürek Şiş", en: "Heart Skewer", ar: "سيخ قلب" },
        variants: [
          { label: L.skewers10, price: 750 },
          { label: L.skewers5, price: 550 },
        ],
      },
      {
        id: "tavuk-sis",
        name: { tr: "Tavuk Şiş", en: "Chicken Skewer", ar: "سيخ دجاج" },
        variants: [
          { label: L.full, price: 720 },
          { label: L.half, price: 530 },
        ],
      },
      {
        id: "karisik",
        name: { tr: "Karışık", en: "Mixed Grill", ar: "مشكل مشاوي" },
        tag: "signature",
        variants: [
          { label: L.skewers10, price: 750 },
          { label: L.skewers5, price: 550 },
        ],
      },
      {
        id: "tavuk-kanat",
        name: { tr: "Tavuk Kanat", en: "Chicken Wings", ar: "أجنحة دجاج" },
        variants: [{ label: L.full, price: 730 }],
      },
    ],
  },
  {
    id: "kebabs",
    title: { tr: "Kebaplar", en: "Kebabs", ar: "الكبابات" },
    icon: "🍢",
    items: [
      {
        id: "adana",
        name: { tr: "Adana Kebap", en: "Adana Kebab", ar: "كباب أضنة" },
        tag: "spicy",
        variants: [
          { label: L.full, price: 750 },
          { label: L.half, price: 550 },
        ],
      },
      {
        id: "urfa",
        name: { tr: "Urfa Kebap", en: "Urfa Kebab", ar: "كباب أورفة" },
        variants: [
          { label: L.full, price: 750 },
          { label: L.half, price: 550 },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: { tr: "Tatlılar", en: "Desserts", ar: "الحلويات" },
    icon: "🍮",
    items: [
      {
        id: "kunefe",
        name: { tr: "Künefe", en: "Künefe", ar: "كنافة" },
        tag: "signature",
        variants: [{ label: L.portion, price: 270 }],
      },
    ],
  },
  {
    id: "drinks",
    title: { tr: "İçecekler", en: "Drinks", ar: "المشروبات" },
    icon: "🥤",
    items: [
      { id: "kutu", name: { tr: "Kutu İçecek", en: "Canned Drink", ar: "مشروب معلب" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "salgam", name: { tr: "Şalgam", en: "Şalgam (Turnip Juice)", ar: "شلغم" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "ayran", name: { tr: "Ayran", en: "Ayran", ar: "عيران" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "soda", name: { tr: "Soda", en: "Sparkling Water", ar: "صودا" }, variants: [{ label: L.piece, price: 60 }] },
      { id: "su", name: { tr: "Su", en: "Water", ar: "ماء" }, variants: [{ label: L.piece, price: 50 }] },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  İzmir (Bayraklı) — ana ocak, sitedeki tam menüden birebir.                  */
/* -------------------------------------------------------------------------- */

const izmirMenu: MenuCategory[] = [
  {
    id: "skewers",
    title: { tr: "Şişler", en: "Skewers", ar: "الأسياخ" },
    icon: "🔥",
    items: [
      {
        id: "ciger",
        name: { tr: "Ciğer Şiş", en: "Liver Skewer", ar: "سيخ كبد" },
        description: {
          tr: "Közde, baharatıyla; Apo'nun imza lezzeti.",
          en: "Char-grilled over embers with house spices — Apo's signature.",
          ar: "مشوي على الجمر مع بهارات البيت — توقيع آبو.",
        },
        tag: "signature",
        variants: [
          { label: grLabel("full", 260), price: 750 },
          { label: grLabel("half", 130), price: 550 },
        ],
      },
      {
        id: "cop-sis",
        name: { tr: "Çöp Şiş", en: "Çöp Şiş (Thin Skewer)", ar: "شيش الأعواد" },
        variants: [
          { label: grLabel("full", 260), price: 760 },
          { label: grLabel("half", 130), price: 550 },
        ],
      },
      {
        id: "yurek-sis",
        name: { tr: "Yürek Şiş", en: "Heart Skewer", ar: "سيخ قلب" },
        variants: [
          { label: grLabel("full", 260), price: 750 },
          { label: grLabel("half", 130), price: 550 },
        ],
      },
      {
        id: "tavuk-sis",
        name: { tr: "Tavuk Şiş", en: "Chicken Skewer", ar: "سيخ دجاج" },
        variants: [
          { label: grLabel("full", 340), price: 675 },
          { label: grLabel("half", 170), price: 550 },
        ],
      },
      {
        id: "karisik",
        name: { tr: "Karışık", en: "Mixed Grill", ar: "مشكل مشاوي" },
        tag: "signature",
        variants: [{ label: grLabel("full", 250), price: 760 }],
      },
      {
        id: "tavuk-kanat",
        name: { tr: "Tavuk Kanadı", en: "Chicken Wings", ar: "أجنحة دجاج" },
        variants: [
          { label: L.full, price: 710 },
          { label: L.half, price: 550 },
        ],
      },
      {
        id: "kuzu-pirzola",
        name: { tr: "Kuzu Pirzola", en: "Lamb Chops", ar: "ريش غنم" },
        variants: [{ label: L.portion, price: 1000 }],
      },
    ],
  },
  {
    id: "specialties-offal",
    title: { tr: "Diğer Ürünler", en: "House Specialties", ar: "أطباق خاصة" },
    icon: "🍖",
    items: [
      {
        id: "mumbar",
        name: { tr: "Mumbar", en: "Mumbar (Stuffed Intestine)", ar: "ممبار" },
        variants: [{ label: L.portion, price: 800 }],
      },
      {
        id: "sirdan",
        name: { tr: "Şırdan", en: "Şırdan (Stuffed Tripe)", ar: "شردان" },
        variants: [
          { label: L.portion, price: 650 },
          { label: L.piece, price: 325 },
        ],
      },
    ],
  },
  {
    id: "addons",
    title: { tr: "İlave Ürünler", en: "Add-ons", ar: "إضافات" },
    icon: "➕",
    items: [
      {
        id: "ilave-ciger-kavurma",
        name: { tr: "İlave Ciğer Kavurma", en: "Extra Sautéed Liver", ar: "كبد مقلي إضافي" },
        variants: [{ label: L.addon, price: 80 }],
      },
      {
        id: "ilave-bulgur",
        name: { tr: "İlave Bulgur Pilavı", en: "Extra Bulgur Pilaf", ar: "برغل إضافي" },
        variants: [{ label: L.addon, price: 50 }],
      },
      {
        id: "keskek",
        name: { tr: "Keşkek", en: "Keşkek", ar: "كشكك" },
        variants: [{ label: L.addon, price: 60 }],
      },
    ],
  },
  {
    id: "kebabs",
    title: { tr: "Kebaplar", en: "Kebabs", ar: "الكبابات" },
    icon: "🍢",
    items: [
      {
        id: "adana",
        name: { tr: "Adana Kebap", en: "Adana Kebab", ar: "كباب أضنة" },
        tag: "spicy",
        variants: [
          { label: grLabel("full", 210), price: 750 },
          { label: { tr: "Tek Şiş · 105 gr", en: "1 Skewer · 105 g", ar: "سيخ واحد · 105 غ" }, price: 550 },
        ],
      },
      {
        id: "urfa",
        name: { tr: "Urfa Kebap", en: "Urfa Kebab", ar: "كباب أورفة" },
        variants: [
          { label: grLabel("full", 210), price: 750 },
          { label: { tr: "Tek Şiş · 105 gr", en: "1 Skewer · 105 g", ar: "سيخ واحد · 105 غ" }, price: 550 },
        ],
      },
      {
        id: "patlican",
        name: { tr: "Patlıcan Kebabı", en: "Eggplant Kebab", ar: "كباب باذنجان" },
        variants: [
          { label: L.full, price: 800 },
          { label: { tr: "Tek Şiş", en: "1 Skewer", ar: "سيخ واحد" }, price: 600 },
        ],
      },
      {
        id: "sarma-beyti",
        name: { tr: "Sarma Beyti", en: "Sarma Beyti", ar: "بيتي ملفوف" },
        variants: [{ label: L.full, price: 800 }],
      },
      {
        id: "karisik-4",
        name: { tr: "4 Kişilik Karışık Kebap", en: "Mixed Kebab for 4", ar: "كباب مشكل لـ4 أشخاص" },
        tag: "signature",
        variants: [{ label: { tr: "4 Kişilik", en: "Serves 4", ar: "لـ4 أشخاص" }, price: 4000 }],
      },
      {
        id: "karisik-6",
        name: { tr: "6 Kişilik Karışık Kebap", en: "Mixed Kebab for 6", ar: "كباب مشكل لـ6 أشخاص" },
        variants: [{ label: { tr: "6 Kişilik", en: "Serves 6", ar: "لـ6 أشخاص" }, price: 4800 }],
      },
      {
        id: "ciger-tava",
        name: { tr: "Ciğer Tava (Kuzudan)", en: "Pan-Fried Liver (Lamb)", ar: "كبد مقلي (غنم)" },
        variants: [{ label: L.portion, price: 800 }],
      },
      {
        id: "sac-kavurma",
        name: { tr: "Sac Kavurma (Bonfileden)", en: "Sac Sauté (Tenderloin)", ar: "صاج لحم (فيليه)" },
        variants: [{ label: { tr: "Tek Kişilik", en: "Single", ar: "لشخص واحد" }, price: 1100 }],
      },
      {
        id: "kofte",
        name: { tr: "Köfte", en: "Grilled Meatballs", ar: "كفتة مشوية" },
        variants: [{ label: L.portion, price: 680 }],
      },
      {
        id: "icli-kofte",
        name: { tr: "İçli Köfte", en: "Stuffed Meatball", ar: "كبة" },
        variants: [{ label: L.piece, price: 140 }],
      },
    ],
  },
  {
    id: "wraps",
    title: { tr: "Dürümler", en: "Wraps", ar: "اللفائف" },
    icon: "🌯",
    items: [
      { id: "ciger-durum", name: { tr: "Ciğer Dürüm", en: "Liver Wrap", ar: "لفة كبد" }, variants: [{ label: L.durum, price: 475 }] },
      { id: "et-durum", name: { tr: "Et Dürüm", en: "Beef Wrap", ar: "لفة لحم" }, variants: [{ label: L.durum, price: 475 }] },
      { id: "adana-durum", name: { tr: "Adana Dürüm", en: "Adana Wrap", ar: "لفة أضنة" }, variants: [{ label: L.durum, price: 475 }] },
      { id: "urfa-durum", name: { tr: "Urfa Dürüm", en: "Urfa Wrap", ar: "لفة أورفة" }, variants: [{ label: L.durum, price: 475 }] },
      { id: "yurek-durum", name: { tr: "Yürek Dürüm", en: "Heart Wrap", ar: "لفة قلب" }, variants: [{ label: L.durum, price: 475 }] },
      { id: "tavuk-durum", name: { tr: "Tavuk Dürüm", en: "Chicken Wrap", ar: "لفة دجاج" }, variants: [{ label: L.durum, price: 475 }] },
    ],
  },
  {
    id: "tantuni",
    title: { tr: "Tantuniler", en: "Tantuni", ar: "التنتوني" },
    icon: "🫓",
    items: [
      {
        id: "et-tantuni",
        name: { tr: "Et Tantuni", en: "Beef Tantuni", ar: "تنتوني لحم" },
        tag: "signature",
        variants: [
          { label: L.somun, price: 500 },
          { label: L.durum, price: 500 },
          { label: L.yogurtlu, price: 700 },
          { label: L.servis, price: 760 },
        ],
      },
      {
        id: "tavuk-tantuni",
        name: { tr: "Tavuk Tantuni", en: "Chicken Tantuni", ar: "تنتوني دجاج" },
        variants: [
          { label: L.somun, price: 475 },
          { label: L.durum, price: 475 },
          { label: L.yogurtlu, price: 650 },
          { label: L.servis, price: 675 },
        ],
      },
    ],
  },
  {
    id: "kids",
    title: { tr: "Çocuk Menüleri", en: "Kids' Menus", ar: "قوائم الأطفال" },
    icon: "🧒",
    items: [
      {
        id: "cocuk-kofte",
        name: { tr: "Çocuk Menüsü Köfte", en: "Kids' Menu — Meatballs", ar: "قائمة أطفال — كفتة" },
        variants: [{ label: L.portion, price: 600 }],
      },
      {
        id: "cocuk-tavuk",
        name: { tr: "Çocuk Menüsü Tavuk", en: "Kids' Menu — Chicken", ar: "قائمة أطفال — دجاج" },
        variants: [{ label: L.portion, price: 600 }],
      },
      {
        id: "patates",
        name: { tr: "Patates Kızartması", en: "French Fries", ar: "بطاطس مقلية" },
        variants: [{ label: L.portion, price: 275 }],
      },
    ],
  },
  {
    id: "soups",
    title: { tr: "Çorbalar", en: "Soups", ar: "الشوربات" },
    icon: "🥣",
    items: [
      { id: "ayak-paca", name: { tr: "Ayak Paça", en: "Trotter Soup", ar: "شوربة أكارع" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "kellepaca", name: { tr: "Kellepaça", en: "Head & Trotter Soup", ar: "شوربة رأس وأكارع" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "iskembe", name: { tr: "İşkembe", en: "Tripe Soup", ar: "شوربة كرشة" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "beyin", name: { tr: "Beyin", en: "Brain", ar: "دماغ" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "tuzlama", name: { tr: "Tuzlama", en: "Tuzlama (Salted Tripe)", ar: "تزلمة" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "gerdan", name: { tr: "Gerdan", en: "Neck Soup", ar: "شوربة رقبة" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "karisik-corba", name: { tr: "Karışık Çorba", en: "Mixed Soup", ar: "شوربة مشكلة" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "tavuk-suyu", name: { tr: "Tavuk Suyu", en: "Chicken Soup", ar: "شوربة دجاج" }, variants: [{ label: L.full, price: 300 }, { label: L.half, price: 245 }] },
      { id: "mercimek", name: { tr: "Mercimek", en: "Lentil Soup", ar: "شوربة عدس" }, variants: [{ label: L.full, price: 245 }, { label: L.half, price: 195 }] },
      { id: "ezogelin", name: { tr: "Ezogelin", en: "Ezogelin Soup", ar: "شوربة إيزوغلين" }, variants: [{ label: L.full, price: 245 }, { label: L.half, price: 195 }] },
    ],
  },
  {
    id: "drinks",
    title: { tr: "İçecekler", en: "Drinks", ar: "المشروبات" },
    icon: "🥤",
    items: [
      { id: "kutu", name: { tr: "Kutu İçecekler", en: "Canned Drinks", ar: "مشروبات معلبة" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "salgam", name: { tr: "Şalgam", en: "Şalgam (Turnip Juice)", ar: "شلغم" }, variants: [{ label: L.piece, price: 100 }, { label: L.liters5, price: 500 }] },
      { id: "ayran", name: { tr: "Ayran", en: "Ayran", ar: "عيران" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "yayik-ayran", name: { tr: "Yayık Ayran", en: "Churned Ayran", ar: "عيران مخيض" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "pancar", name: { tr: "Pancar Suyu (Acılı/Acısız)", en: "Beet Juice (Mild/Spicy)", ar: "عصير شمندر" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "nigde", name: { tr: "Niğde Gazozu", en: "Niğde Soda", ar: "غازوز نيغدة" }, variants: [{ label: L.piece, price: 100 }] },
      { id: "soda", name: { tr: "Soda", en: "Sparkling Water", ar: "صودا" }, variants: [{ label: L.piece, price: 40 }] },
      { id: "su", name: { tr: "Su", en: "Water", ar: "ماء" }, variants: [{ label: L.piece, price: 25 }] },
    ],
  },
  {
    id: "desserts",
    title: { tr: "Tatlılar", en: "Desserts", ar: "الحلويات" },
    icon: "🍮",
    items: [
      {
        id: "kunefe",
        name: { tr: "Künefe", en: "Künefe", ar: "كنافة" },
        tag: "signature",
        variants: [{ label: L.portion, price: 325 }],
      },
      {
        id: "kunefe-dondurmali",
        name: { tr: "Dondurmalı Künefe", en: "Künefe with Ice Cream", ar: "كنافة بالآيس كريم" },
        variants: [{ label: L.portion, price: 375 }],
      },
      {
        id: "soguk-baklava",
        name: { tr: "Soğuk Baklava", en: "Cold Baklava", ar: "بقلاوة باردة" },
        variants: [{ label: L.slices4, price: 225 }],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */

export const branches: Branch[] = [
  {
    id: "izmir",
    city: { tr: "İzmir", en: "İzmir", ar: "إزمير" },
    district: { tr: "Bayraklı", en: "Bayraklı", ar: "بايراكلي" },
    address: {
      tr: "Adalet Mah. Haydar Aliyev Cd. No:53/B, 35530 Bayraklı / İzmir",
      en: "Adalet Mah. Haydar Aliyev Cd. No:53/B, 35530 Bayraklı / İzmir",
      ar: "حي العدالة، شارع حيدر علييف رقم 53/B، 35530 بايراكلي / إزمير",
    },
    phone: "+90 232 999 17 13",
    mapQuery: "Mersinli Ciğerci Apo Bayraklı İzmir",
    hours: { tr: "Her gün 10:00 – 24:00", en: "Daily 10:00 – 24:00", ar: "يوميًا 10:00 – 24:00" },
    note: {
      tr: "Ana ocak — Mersin usulü közde ciğerin İzmir'deki adresi.",
      en: "The home grill — Mersin-style ember liver in İzmir.",
      ar: "الموقد الأم — كبد على الجمر بأسلوب مرسين في إزمير.",
    },
    menu: izmirMenu,
  },
  {
    id: "ankara",
    city: { tr: "Ankara", en: "Ankara", ar: "أنقرة" },
    district: { tr: "Ankara", en: "Ankara", ar: "أنقرة" },
    address: {
      tr: "Ankara şubemiz — detaylı adres için bizi arayın.",
      en: "Ankara branch — call us for the full address.",
      ar: "فرع أنقرة — اتصل بنا للحصول على العنوان الكامل.",
    },
    mapQuery: "Ciğerci Apo Ankara",
    hours: { tr: "Her gün 10:00 – 24:00", en: "Daily 10:00 – 24:00", ar: "يوميًا 10:00 – 24:00" },
    note: {
      tr: "Başkentte közün ve baharatın buluştuğu sofra.",
      en: "Where embers meet spice in the capital.",
      ar: "حيث يلتقي الجمر بالبهار في العاصمة.",
    },
    menu: fullMenu(790, 550),
  },
  {
    id: "istanbul",
    city: { tr: "İstanbul", en: "İstanbul", ar: "إسطنبول" },
    district: { tr: "Ataşehir", en: "Ataşehir", ar: "آتاشهير" },
    address: {
      tr: "Ataşehir / İstanbul",
      en: "Ataşehir / İstanbul",
      ar: "آتاشهير / إسطنبول",
    },
    mapQuery: "Ciğerci Apo Ataşehir İstanbul",
    hours: { tr: "Her gün 10:00 – 24:00", en: "Daily 10:00 – 24:00", ar: "يوميًا 10:00 – 24:00" },
    note: {
      tr: "Anadolu yakasında közde ciğerin yeni durağı.",
      en: "Ember liver's new stop on the Anatolian side.",
      ar: "محطة الكبد على الجمر الجديدة في الجانب الآسيوي.",
    },
    menu: istanbulMenu,
  },
];

export const getBranch = (id: string): Branch | undefined =>
  branches.find((b) => b.id === id);
