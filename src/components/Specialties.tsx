import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGsapContext } from "../hooks/useGsapContext";

const ITEMS = [
  { key: "ciger", glyph: "🔥", from: "#9a3412", to: "#ea580c" },
  { key: "tantuni", glyph: "🌯", from: "#b45309", to: "#f59e0b" },
  { key: "adana", glyph: "🌶️", from: "#7f1d1d", to: "#dc2626" },
  { key: "kunefe", glyph: "🍮", from: "#92400e", to: "#f97316" },
] as const;

/** Yatay pinlenen scroll ile imza lezzetler. */
export default function Specialties() {
  const { t } = useTranslation();

  const ref = useGsapContext<HTMLElement>((_s, scope) => {
    const track = scope.querySelector<HTMLDivElement>("[data-track]");
    const viewport = scope.querySelector<HTMLDivElement>("[data-viewport]");
    if (!track || !viewport) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) {
      // Mobilde basit fade-in
      gsap.from(scope.querySelectorAll("[data-panel]"), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: track, start: "top 80%" },
      });
      return;
    }

    const distance = () => track.scrollWidth - viewport.clientWidth;

    gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: () => "+=" + distance(),
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section id="specialties" ref={ref} className="relative scroll-mt-24 overflow-hidden bg-[var(--bg)] py-24 sm:py-28">
      <div className="container-px">
        <span className="kicker mb-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" />
          {t("specialties.kicker")}
        </span>
        <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-extrabold leading-tight">
          {t("specialties.title")}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-soft">{t("specialties.subtitle")}</p>
      </div>

      <div data-viewport className="mt-12 overflow-hidden">
        <div data-track className="flex gap-6 px-5 sm:px-8 lg:w-max lg:px-[8vw]">
          {ITEMS.map((item, i) => (
            <article
              data-panel
              key={item.key}
              className="grain relative flex h-[26rem] w-[80vw] shrink-0 flex-col justify-end overflow-hidden rounded-[2rem] border border-[var(--line)] p-8 text-white shadow-2xl sm:w-[24rem]"
              style={{ background: `linear-gradient(150deg, ${item.from}, ${item.to})` }}
            >
              <span className="absolute end-7 top-7 text-6xl drop-shadow-lg">{item.glyph}</span>
              <span className="absolute start-7 top-7 font-display text-7xl font-extrabold text-white/15">
                0{i + 1}
              </span>
              <h3 className="font-display text-3xl font-extrabold">
                {t(`specialties.items.${item.key}.name`)}
              </h3>
              <p className="mt-3 max-w-xs text-white/85">
                {t(`specialties.items.${item.key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
