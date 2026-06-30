import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/image.png";

const SECTIONS = ["about", "specialties", "menu", "branches"] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--line)] py-3 backdrop-blur-xl"
          : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 80%, transparent)" : "transparent",
      }}
    >
      <nav className="container-px flex items-center justify-between gap-4">
        <button
          onClick={() => goTo("top")}
          className="flex items-center"
          aria-label={t("brand")}
        >
          <img
            src={logo}
            alt={t("brandFull")}
            className="h-10 w-auto sm:h-11 dark:drop-shadow-[0_0_18px_rgba(249,115,22,0.25)]"
          />
        </button>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s}>
              <button
                onClick={() => goTo(s)}
                className="rounded-full px-4 py-2 text-sm font-medium text-soft transition-colors hover:bg-[var(--line)] hover:text-[var(--text)]"
              >
                {t(`nav.${s}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => goTo("branches")}
            className="btn-primary hidden md:inline-flex"
          >
            {t("nav.branches")}
          </button>

          {/* Mobil menü butonu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] lg:hidden"
            aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobil açılır menü */}
      <div
        className={`fixed inset-x-0 top-[64px] z-40 origin-top px-5 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="surface grain relative overflow-hidden rounded-3xl border border-[var(--line)] p-4 shadow-2xl">
          <ul className="flex flex-col">
            {SECTIONS.map((s) => (
              <li key={s}>
                <button
                  onClick={() => goTo(s)}
                  className="w-full rounded-2xl px-4 py-3.5 text-start text-base font-medium transition-colors hover:bg-[var(--line)]"
                >
                  {t(`nav.${s}`)}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/branch/izmir"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                {t("nav.menu")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
