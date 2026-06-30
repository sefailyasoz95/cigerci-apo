import { useGsapContext } from "../hooks/useGsapContext";
import { gsap } from "gsap";

/** Sayfanın en üstünde kor renginde kaydırma ilerleme çubuğu. */
export default function ScrollProgress() {
  const ref = useGsapContext<HTMLDivElement>((_self, scope) => {
    const bar = scope.querySelector<HTMLDivElement>("[data-bar]");
    if (!bar) return;
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      },
    );
  });

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
      aria-hidden="true"
    >
      <div
        data-bar
        className="h-full origin-left bg-gradient-to-r from-ember-400 via-ember-500 to-ember-700"
      />
    </div>
  );
}
