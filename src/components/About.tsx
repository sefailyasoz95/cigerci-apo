import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGsapContext } from "../hooks/useGsapContext";

const STATS = [
  { value: 58, suffix: "+", key: "years" },
  { value: 3, suffix: "", key: "branches" },
  { value: 1200, suffix: "+", key: "skewers" },
] as const;

export default function About() {
  const { t } = useTranslation();

  const ref = useGsapContext<HTMLElement>((_s, scope) => {
    const q = gsap.utils.selector(scope);

    gsap.from(q("[data-text]"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: scope, start: "top 75%" },
    });

    // Sayaç animasyonu
    q("[data-counter]").forEach((el) => {
      const target = Number(el.getAttribute("data-target"));
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
        onUpdate: () => {
          el.textContent = Math.round(obj.v).toLocaleString("tr-TR");
        },
      });
    });

    // Dekoratif çizgi
    gsap.from(q("[data-line]"), {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.1,
      ease: "power2.inOut",
      scrollTrigger: { trigger: scope, start: "top 70%" },
    });
  });

  return (
    <section id="about" ref={ref} className="relative z-10 scroll-mt-24 bg-[var(--bg)] py-24 sm:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <span data-line className="absolute -start-4 top-2 hidden h-[88%] w-[2px] bg-gradient-to-b from-ember-500 to-transparent lg:block" />
          <span data-text className="kicker mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" />
            {t("about.kicker")}
          </span>
          <h2 data-text className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-extrabold leading-tight">
            {t("about.title")}
          </h2>
          <p data-text className="mt-6 text-lg text-soft">
            {t("about.p1")}
          </p>
          <p data-text className="mt-4 text-lg text-soft">
            {t("about.p2")}
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.key}
              data-text
              className="surface grain relative overflow-hidden rounded-3xl border border-[var(--line)] p-6 text-center"
            >
              <div className="font-display text-4xl font-extrabold ember-text sm:text-5xl">
                <span data-counter data-target={s.value}>
                  0
                </span>
                {s.suffix}
              </div>
              <p className="mt-2 text-sm text-soft">{t(`about.stats.${s.key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
