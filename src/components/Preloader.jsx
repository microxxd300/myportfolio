import { useEffect, useState } from "react";

const COUNT_MS = 2000;
const FADE_MS = 300;
const HOLD_MS = 200;

/**
 * Full-screen intro: a counter runs 0 → 100, the labels fade, then the
 * whole panel wipes upward and hands scrolling back to Lenis.
 */
export default function Preloader({ lenisRef }) {
  const [count, setCount] = useState(0);
  // counting → fading → wiping → done
  const [phase, setPhase] = useState("counting");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("done");
      return;
    }

    lenisRef?.current?.stop();
    window.scrollTo(0, 0);

    let frame = 0;
    const timers = [];
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      setCount(Math.round(t * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      setPhase("fading");
      timers.push(
        setTimeout(() => {
          setPhase("wiping");
          timers.push(
            setTimeout(() => {
              setPhase("done");
              lenisRef?.current?.start();
            }, 700)
          );
        }, FADE_MS + HOLD_MS)
      );
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      // If we unmount mid-intro, do not leave scrolling locked.
      lenisRef?.current?.start();
    };
  }, [lenisRef]);

  if (phase === "done") return null;

  return (
    <div
      className={`preloader ${phase === "wiping" ? "is-wiping" : ""}`}
      aria-hidden={phase !== "counting"}
    >
      <span
        className={`preloader__brand mono ${
          phase === "counting" ? "" : "is-out"
        }`}
      >
        <span className="nav__mark" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} />
          ))}
        </span>
        Kurt Z. Lumpayao — CV
      </span>
      <span
        className={`preloader__count dot ${
          phase === "counting" ? "" : "is-out"
        }`}
      >
        {String(count).padStart(3, "0")}
        <span className="preloader__pct">%</span>
      </span>
    </div>
  );
}
