import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { branches } from "../data/branches";
import { useLocalized } from "../hooks/useLocalized";
import SectionHeader from "./SectionHeader";
import MenuList from "./MenuList";

/** Ana sayfada şube sekmeleriyle menü önizlemesi. */
export default function MenuShowcase() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const [active, setActive] = useState(branches[0].id);
  const branch = branches.find((b) => b.id === active) ?? branches[0];

  return (
    <section id="menu" className="relative z-10 scroll-mt-24 bg-[var(--bg)] py-24 sm:py-32">
      <div className="container-px">
        <SectionHeader
          kicker={t("menu.kicker")}
          title={t("menu.title")}
          subtitle={t("menu.subtitle")}
          align="center"
        />

        {/* Şube sekmeleri */}
        <div className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1.5 rounded-full border border-[var(--line)] p-1.5">
          {branches.map((b) => {
            const isActive = b.id === active;
            return (
              <button
                key={b.id}
                onClick={() => setActive(b.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-ember-500 text-white shadow-md shadow-ember-500/30"
                    : "text-soft hover:text-[var(--text)]"
                }`}
              >
                {loc(b.city)}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-sm text-soft">{t("menu.perPersonNote")}</p>

        <div className="mt-10">
          <MenuList branch={branch} />
        </div>

        <div className="mt-10 text-center">
          <Link to={`/branch/${branch.id}`} className="btn-ghost">
            {t("menu.viewFullMenu")} — {loc(branch.city)}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rtl:rotate-180">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
