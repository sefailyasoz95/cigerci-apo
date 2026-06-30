import { gsap } from "gsap";
import { useGsapContext } from "../hooks/useGsapContext";

interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}

/** Scroll'da ortaya çıkan bölüm başlığı. */
export default function SectionHeader({ kicker, title, subtitle, align = "start" }: Props) {
  const ref = useGsapContext<HTMLDivElement>((_s, scope) => {
    gsap.from(scope.querySelectorAll("[data-anim]"), {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: scope, start: "top 82%" },
    });
  });

  return (
    <div
      ref={ref}
      className={`flex max-w-2xl flex-col gap-4 ${align === "center" ? "mx-auto items-center text-center" : ""}`}
    >
      <span data-anim className="kicker">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember-500" />
        {kicker}
      </span>
      <h2 data-anim className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-extrabold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p data-anim className="text-lg text-soft">
          {subtitle}
        </p>
      )}
    </div>
  );
}
