# Ciğerci Apo — Premium Restoran Web Sitesi

Mersinli Ciğerci Apo için sıfırdan yazılmış, **çok dilli (TR / EN / AR)**, **dark & light temalı**, **GSAP scroll animasyonlu** modern bir restoran web sitesi. Eski statik HTML sitenin yerini alacak şekilde tasarlandı.

## Teknoloji

- **Vite + React 18 + TypeScript** — hafif, hızlı, statik (backend yok)
- **GSAP + ScrollTrigger** — giriş animasyonları, scroll parallax, yatay pinlenen "imza lezzetler" bölümü, sayaçlar, scroll ilerleme çubuğu
- **Tailwind CSS** — `darkMode: "class"` ile dark/light tema
- **react-i18next** — TR / EN / **AR (RTL desteğiyle)**; dil `localStorage`'da saklanır, `<html dir>` otomatik güncellenir
- **react-router-dom** — ana sayfa + şube bazlı menü sayfaları

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
```

Üretim derlemesi:

```bash
npm run build    # tsc + vite build -> dist/
npm run preview
```

## Yapı

```
src/
  data/
    branches.ts     # İzmir / Ankara / İstanbul şubeleri + menüler (const data)
    labels.ts       # Tekrar eden porsiyon etiketleri
  i18n/
    index.ts        # i18next kurulumu + dir/lang yönetimi
    locales/        # tr.json, en.json, ar.json (UI metinleri)
  context/ThemeContext.tsx   # dark/light tema
  hooks/
    useGsapContext.ts  # scope'lu, otomatik temizlenen GSAP context
    useLocalized.ts    # veri içindeki çok dilli alanları çözer
  components/       # Navbar, Hero, About, Specialties, Branches, MenuList, Footer ...
  pages/
    Home.tsx
    BranchPage.tsx  # /branch/:id
```

## Veri Notu

Menü ve fiyatlar mevcut siteden alınmıştır:

- **Ankara** ve **İstanbul (Ataşehir)** menüleri sayfadaki listelerden birebir aktarıldı.
- **İzmir** şubesinin detaylı menüsü sitede PDF olarak sunulduğundan, çekirdek menü temsilî olarak Ankara fiyatlarıyla dolduruldu. `src/data/branches.ts` içinden kolayca güncellenebilir.

Tüm içerik `src/data/` ve `src/i18n/locales/` altında düz veridir; yeni ürün/şube/dil eklemek için bu dosyaları düzenlemeniz yeterli.

## Öne Çıkan Animasyonlar

- Hero başlık satırlarının maskeli "reveal" girişi + arka plan kor parallax'ı
- "İmza Lezzetler" bölümünde scroll ile yatay pinlenen kartlar (masaüstü)
- Scroll'a bağlı sayaç (yıl / şube / şiş) animasyonları
- Sayfa üstünde scroll ilerleme çubuğu
- `prefers-reduced-motion` desteği
```
