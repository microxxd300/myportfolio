import { useEffect, useState } from "react";

// Degrees of tilt and pixels of depth at a full screen's distance from
// the centre. Halved on narrow screens, where a large tilt costs more
// readability than it buys drama.
const MAX_TILT = 32;
const MAX_FAN = 4;
const MAX_DEPTH = 220;
const MAX_SHRINK = 0.06;

/**
 * Lays the slides on a curved stack. A slide lies flat for as long as it
 * covers the middle of the screen — so a tall slide stays readable the
 * whole time you are reading it — and only tilts away as it enters from
 * below or leaves above.
 *
 * Returns the slides (for the pager) and which one is currently centred.
 */
export function useSlideStack() {
  const [slides, setSlides] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wraps = [...document.querySelectorAll(".slide-wrap")];
    if (!wraps.length) return;

    setSlides(
      wraps.map((el) => ({ id: el.id, label: el.dataset.label || el.id }))
    );

    const cards = wraps.map((el) => el.querySelector(".slide"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let lastActive = -1;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const mid = vh / 2;
      const k = window.innerWidth <= 768 ? 0.5 : 1;

      let best = Infinity;
      let current = 0;

      wraps.forEach((wrap, i) => {
        // Measure the untransformed wrapper, never the tilted card.
        const r = wrap.getBoundingClientRect();
        let d = 0;
        if (r.top > mid) d = (r.top - mid) / vh;
        else if (r.bottom < mid) d = (r.bottom - mid) / vh;
        d = Math.max(-1, Math.min(1, d));

        const dist = Math.abs(d);
        if (dist < best) {
          best = dist;
          current = i;
        }

        const card = cards[i];
        if (!card) return;
        if (reduce.matches || d === 0) {
          card.style.transform = "";
          return;
        }
        // Entering from below tilts the top edge toward you; leaving
        // above tilts it away — the two halves of a drum.
        const rx = -d * MAX_TILT * k;
        const rz = d * MAX_FAN * k;
        const tz = -dist * MAX_DEPTH * k;
        const s = 1 - dist * MAX_SHRINK * k;
        card.style.transform = `perspective(1600px) translateZ(${tz.toFixed(
          1
        )}px) rotateX(${rx.toFixed(2)}deg) rotateZ(${rz.toFixed(
          2
        )}deg) scale(${s.toFixed(4)})`;
      });

      if (current !== lastActive) {
        lastActive = current;
        setActive(current);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      cards.forEach((c) => c && (c.style.transform = ""));
    };
  }, []);

  return { slides, active };
}
