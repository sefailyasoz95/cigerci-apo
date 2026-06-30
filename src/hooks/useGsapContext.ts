import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scope'lanmış GSAP context'i döndürür. callback içinde tanımlanan tüm
 * animasyonlar otomatik temizlenir. ref'i animasyon kapsayıcısına bağlayın.
 */
export function useGsapContext<T extends HTMLElement = HTMLDivElement>(
  setup: (self: gsap.Context, scope: T) => void,
  deps: unknown[] = [],
) {
  const scopeRef = useRef<T>(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;
    const ctx = gsap.context((self) => setup(self, scope), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}
