import { useTranslation } from "react-i18next";

/** Sonsuz kayan lezzet şeridi. */
export default function Marquee() {
  const { t } = useTranslation();
  const items = t("marquee", { returnObjects: true }) as string[];
  const list = Array.isArray(items) ? items : [];
  const doubled = [...list, ...list];

  return (
    <div className="mask-fade-x relative flex overflow-hidden">
      <ul className="flex shrink-0 animate-marquee items-center gap-8 pe-8 motion-reduce:animate-none">
        {doubled.map((label, i) => (
          <li key={i} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-soft">
            <span>{label}</span>
            <span className="text-ember-500">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
