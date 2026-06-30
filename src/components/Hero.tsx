import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGsapContext } from "../hooks/useGsapContext";
import Marquee from "./Marquee";
import apoImg from "../assets/image.png";

export default function Hero({ onCtaMenu, onCtaBranches }: {
  onCtaMenu: () => void;
  onCtaBranches: () => void;
}) {
  const { t } = useTranslation();

  const ref = useGsapContext<HTMLElement>((_self, scope) => {
    const q = gsap.utils.selector(scope);

    // Giriş animasyonu (sayfa açılışında)
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .set(q(".gsap-reveal"), { visibility: "visible" })
      .from(q("[data-badge]"), { y: 20, opacity: 0, duration: 0.6 })
      .from(
        q("[data-title] .line"),
        { yPercent: 120, opacity: 0, duration: 1, stagger: 0.12 },
        "-=0.2",
      )
      .from(q("[data-sub]"), { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(q("[data-cta] > *"), { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
      .from(q("[data-scroll]"), { opacity: 0, duration: 0.8 }, "-=0.4");

    // Arka plan kor parıltısı — yavaş nabız
    q("[data-blob]").forEach((el, i) => {
      gsap.to(el, {
        scale: 1.15,
        opacity: 0.85,
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Görselin yavaş süzülmesi
    gsap.to(q("[data-float]"), { y: -16, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

    const textCol = q("[data-text]");
    const img = q("[data-img]");
    const fadeEls = q("[data-fade]");

    const mm = gsap.matchMedia();

    // MASAÜSTÜ: pinlenip scroll'a bağlı dönüşüm
    mm.add("(min-width: 1024px)", () => {
      gsap.set(img, {
        xPercent: -50,
        yPercent: -50,
        x: () => window.innerWidth * 0.24,
        scale: 0.92,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "+=140%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(textCol, { autoAlpha: 0, xPercent: -10, scale: 0.9, ease: "power2.in" }, 0)
        .to(fadeEls, { autoAlpha: 0, ease: "power1.in" }, 0)
        .to(img, { x: 0, scale: 1.5, ease: "power2.inOut" }, 0);
    });
  });

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {/* Arka plan kor blobları */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div data-blob className="absolute -left-20 top-10 h-[36rem] w-[36rem] rounded-full bg-ember-600/20 blur-[120px]" />
        <div data-blob className="absolute -right-10 bottom-0 h-[30rem] w-[30rem] rounded-full bg-ember-500/25 blur-[120px]" />
        <div data-blob className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/10 blur-[100px]" />
      </div>

      <div className="container-px relative w-full">
        {/* Metin sütunu */}
        <div data-text className="relative z-10 max-w-xl">
          <span data-badge className="gsap-reveal kicker mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" />
            {t("hero.badge")}
          </span>

          <h1
            data-title
            className="gsap-reveal font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.95]"
          >
            <span className="block overflow-hidden">
              <span className="line block">{t("hero.titleLine1")}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="line ember-text block">{t("hero.titleHighlight")}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="line block">{t("hero.titleLine2")}</span>
            </span>
          </h1>

          <p data-sub className="gsap-reveal mt-7 max-w-lg text-lg text-soft">
            {t("hero.subtitle")}
          </p>

          <div data-cta className="gsap-reveal mt-9 flex flex-wrap items-center gap-3">
            <button onClick={onCtaMenu} className="btn-primary">
              {t("hero.ctaMenu")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rtl:rotate-180">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={onCtaBranches} className="btn-ghost">
              {t("hero.ctaBranches")}
            </button>
          </div>
        </div>
      </div>

      {/* Logo görseli — masaüstünde scroll ile büyüyüp ortalanır */}
      <div
        data-img
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden w-[30rem] -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <img
          data-float
          src={apoImg}
          alt={t("brandFull")}
          className="h-auto w-full drop-shadow-2xl dark:drop-shadow-[0_20px_60px_rgba(249,115,22,0.3)]"
        />
      </div>

      {/* Kaydır göstergesi */}
      <div
        data-scroll
        data-fade
        className="gsap-reveal absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-soft"
      >
        {t("hero.scroll")}
        <span className="relative grid h-10 w-5 place-items-start justify-center rounded-full border border-[var(--line)] pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ember-500" />
        </span>
      </div>

      {/* Alt marquee */}
      <div data-fade className="absolute inset-x-0 bottom-0 hidden border-t border-[var(--line)] py-3 backdrop-blur-sm sm:block">
        <Marquee />
      </div>
    </section>
  );
}
