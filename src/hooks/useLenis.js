import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Smooth scroll, plus smooth anchor jumps for the nav links.
// Returns a ref holding the instance so the preloader can stop and
// start scrolling around its wipe.
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Every visit starts at the top behind the preloader, so do not let
    // the browser restore a stale position underneath it on reload.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Let same-page anchors ride the smooth scroll too.
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      // Resolve the destination from the real scroll position. Handing
      // Lenis the element makes it add the rect to its own internal
      // position, so any drift between the two lands the jump off target.
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const y = target.getBoundingClientRect().top + window.scrollY - margin;
      lenis.scrollTo(Math.max(0, y));
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
