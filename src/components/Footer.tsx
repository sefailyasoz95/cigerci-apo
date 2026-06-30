import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { branches } from "../data/branches";
import { useLocalized } from "../hooks/useLocalized";
import logo from "../assets/image.png";

export default function Footer() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (id: string) => {
    if (location.pathname !== "/") navigate(`/#${id}`);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="grain relative overflow-hidden border-t border-[var(--line)] pt-16">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-ember-600/15 blur-[120px]" />

      <div className="container-px grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt={t("brandFull")}
            className="h-14 w-auto dark:drop-shadow-[0_0_18px_rgba(249,115,22,0.25)]"
          />
          <p className="mt-4 max-w-sm text-soft">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-soft">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2.5">
            {["about", "specialties", "menu", "branches"].map((s) => (
              <li key={s}>
                <button onClick={() => goTo(s)} className="text-soft transition-colors hover:text-ember-500">
                  {t(`nav.${s}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-soft">
            {t("footer.ourBranches")}
          </h4>
          <ul className="space-y-2.5">
            {branches.map((b) => (
              <li key={b.id}>
                <Link to={`/branch/${b.id}`} className="text-soft transition-colors hover:text-ember-500">
                  {loc(b.city)} — {loc(b.district)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-sm text-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t("brandFull")}. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5">
            <span className="text-ember-500">🔥</span> {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
