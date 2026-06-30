import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import type { Branch, DishTag } from "../types";
import { useLocalized } from "../hooks/useLocalized";
import { useGsapContext } from "../hooks/useGsapContext";

const tagStyle: Record<DishTag, string> = {
  signature: "bg-ember-500/15 text-ember-500",
  spicy: "bg-red-500/15 text-red-500",
  new: "bg-emerald-500/15 text-emerald-500",
};

export default function MenuList({ branch }: { branch: Branch }) {
  const { t } = useTranslation();
  const loc = useLocalized();

  const ref = useGsapContext<HTMLDivElement>(
    (_s, scope) => {
      gsap.from(scope.querySelectorAll("[data-cat]"), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: scope, start: "top 80%" },
      });
    },
    [branch.id],
  );

  const fmt = (n: number) => `${n.toLocaleString("tr-TR")} ${t("common.currency")}`;

  return (
    <div ref={ref} key={branch.id} className="grid gap-6 lg:grid-cols-2">
      {branch.menu.map((cat) => (
        <section
          data-cat
          key={cat.id}
          className="surface grain relative overflow-hidden rounded-3xl border border-[var(--line)] p-6 sm:p-7"
        >
          <header className="mb-5 flex items-center gap-3 border-b border-[var(--line)] pb-4">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ember-500/10 text-2xl">
              {cat.icon}
            </span>
            <h3 className="font-display text-xl font-extrabold">{loc(cat.title)}</h3>
          </header>

          <ul className="divide-y divide-[var(--line)]">
            {cat.items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-4 py-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{loc(item.name)}</span>
                    {item.tag && (
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tagStyle[item.tag]}`}>
                        {t(`tags.${item.tag}`)}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="mt-0.5 text-sm text-soft">{loc(item.description)}</p>
                  )}
                </div>

                <div className="shrink-0 text-end">
                  {item.variants.map((v, i) => (
                    <div key={i} className="flex items-center justify-end gap-2 whitespace-nowrap text-sm">
                      <span className="text-soft">{loc(v.label)}</span>
                      <span className="font-bold text-ember-500">{fmt(v.price)}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
