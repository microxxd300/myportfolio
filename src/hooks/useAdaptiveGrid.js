import { useEffect } from "react";

const FONT_BASE = 16;
const BASE_W = 1920;
const COEF = 0.6666;

// Below 1920px the CSS media queries drive the root font-size in vw.
// Above it there is no query to match, so scale the root size up here
// instead — damped by COEF so very wide screens do not get absurd type.
export function useAdaptiveGrid() {
  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      const reduction = ((BASE_W - w) / BASE_W) * 100 * COEF;
      const size = FONT_BASE - (FONT_BASE * reduction) / 100;
      if (size > FONT_BASE) {
        document.documentElement.style.fontSize = `${size}px`;
      } else {
        // Hand control back to the vw media queries.
        document.documentElement.style.removeProperty("font-size");
      }
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
}
