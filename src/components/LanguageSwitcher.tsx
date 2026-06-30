import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS } from "../i18n";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    SUPPORTED_LANGS.find((l) => i18n.language?.startsWith(l.code)) ??
    SUPPORTED_LANGS[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const change = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-[var(--line)] px-3 text-sm font-semibold transition-colors hover:border-ember-500 hover:text-ember-500"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
        {current.short}
      </button>

      {open && (
        <ul
          role="listbox"
          className="surface absolute end-0 mt-2 w-40 overflow-hidden rounded-2xl border border-[var(--line)] p-1.5 shadow-xl"
        >
          {SUPPORTED_LANGS.map((l) => {
            const active = l.code === current.code;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => change(l.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-ember-500/10 text-ember-500"
                      : "hover:bg-[var(--line)]"
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="text-xs text-soft">{l.short}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
