import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { branches, getBranch } from "../data/branches";
import { useLocalized } from "../hooks/useLocalized";
import { useGsapContext } from "../hooks/useGsapContext";
import MenuList from "../components/MenuList";

export default function BranchPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const loc = useLocalized();
  const branch = getBranch(id ?? "");

  const ref = useGsapContext<HTMLElement>(
    (_s, scope) => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .set(scope.querySelectorAll("[data-h]"), { visibility: "visible" })
        .from(scope.querySelectorAll("[data-h]"), {
          y: 28,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
        });
    },
    [id],
  );

  if (!branch) {
    return (
      <div className="container-px grid min-h-[60vh] place-items-center text-center">
        <div>
          <p className="text-2xl font-bold">{t("branchPage.notFound")}</p>
          <Link to="/" className="btn-primary mt-6">
            {t("branchPage.back")}
          </Link>
        </div>
      </div>
    );
  }

  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;
  const others = branches.filter((b) => b.id !== branch.id);

  return (
    <article ref={ref}>
      {/* Başlık */}
      <header className="grain relative overflow-hidden pb-12 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute -top-20 right-0 -z-10 h-96 w-96 rounded-full bg-ember-600/20 blur-[130px]" />
        <div className="container-px">
          <Link
            to="/"
            data-h
            className="gsap-reveal inline-flex items-center gap-2 text-sm text-soft transition-colors hover:text-ember-500"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rtl:rotate-180">
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("branchPage.back")}
          </Link>

          <p data-h className="gsap-reveal kicker mt-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" />
            {t("brandFull")}
          </p>
          <h1 data-h className="gsap-reveal mt-3 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-none">
            {loc(branch.city)}{" "}
            <span className="ember-text">{loc(branch.district)}</span>
          </h1>
          <p data-h className="gsap-reveal mt-5 max-w-xl text-lg text-soft">
            {loc(branch.note)}
          </p>

          <div data-h className="gsap-reveal mt-7 flex flex-wrap items-center gap-3">
            <a href={maps} target="_blank" rel="noreferrer" className="btn-primary">
              {t("branchPage.map")}
            </a>
            {branch.phone && (
              <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="btn-ghost">
                {t("branchPage.callNow")} · <span dir="ltr">{branch.phone}</span>
              </a>
            )}
          </div>

          <div data-h className="gsap-reveal mt-7 flex flex-wrap gap-x-8 gap-y-2 text-sm text-soft">
            <span className="flex items-center gap-2">
              <span className="text-ember-500">⚲</span> {loc(branch.address)}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-ember-500">◷</span> {loc(branch.hours)}
            </span>
          </div>
        </div>
      </header>

      {/* Menü */}
      <section className="py-12 sm:py-16">
        <div className="container-px">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              {t("branchPage.ourMenu")}
            </h2>
            <span className="text-sm text-soft">{t("menu.perPersonNote")}</span>
          </div>
          <MenuList branch={branch} />
        </div>
      </section>

      {/* Diğer şubeler */}
      <section className="pb-24">
        <div className="container-px">
          <h2 className="mb-6 font-display text-xl font-extrabold">{t("branchPage.otherBranches")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((b) => (
              <Link
                key={b.id}
                to={`/branch/${b.id}`}
                className="surface group flex items-center justify-between rounded-2xl border border-[var(--line)] p-5 transition-all hover:border-ember-500/60 hover:shadow-lg"
              >
                <span>
                  <span className="font-display text-lg font-bold">{loc(b.city)}</span>
                  <span className="block text-sm text-soft">{loc(b.district)}</span>
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ember-500 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
