import { useEffect, useId, useRef } from "react";

const REST_SCALE = 1;
const REST_FREQ = 0.009;
const HOVER_FREQ = 0.022;

/**
 * A real spring, integrated per frame. The filter's `scale` and
 * `baseFrequency` are SVG attributes, not CSS properties, so they have
 * to be written imperatively — a CSS transition cannot touch them.
 */
function spring(from, to, { tension, friction }, onUpdate) {
  let x = from;
  let v = 0;
  let last = performance.now();
  let frame = 0;

  const step = (now) => {
    // Clamp dt so a backgrounded tab does not explode the integration.
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    const a = tension * (to - x) - friction * v;
    v += a * dt;
    x += v * dt;

    if (Math.abs(to - x) < 0.001 && Math.abs(v) < 0.001) {
      x = to;
      onUpdate(x);
      return;
    }
    onUpdate(x);
    frame = requestAnimationFrame(step);
  };

  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

export default function LiquidImage({
  src,
  alt = "",
  bare = false,
  maxScale = 8,
  className = "",
  label,
}) {
  const rawId = useId();
  const filterId = `liquid${rawId.replace(/[:]/g, "")}`;
  const dispRef = useRef(null);
  const turbRef = useRef(null);
  const figureRef = useRef(null);
  const cancelRef = useRef(null);

  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;

    // Hover distortion is a desktop affordance; skip it on touch and
    // on small screens where it only costs frames.
    const fine = window.matchMedia("(min-width: 769px) and (hover: hover)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const run = (toScale, toFreq) => {
      cancelRef.current?.();
      const fromScale = Number(dispRef.current?.getAttribute("scale") ?? 1);
      cancelRef.current = spring(
        fromScale,
        toScale,
        { tension: 140, friction: 13 },
        (val) => {
          dispRef.current?.setAttribute("scale", val.toFixed(3));
          // Drive frequency off the same progress so they stay in step.
          const t = (val - REST_SCALE) / (maxScale - REST_SCALE || 1);
          const freq = REST_FREQ + (toFreq - REST_FREQ) * Math.max(0, t);
          turbRef.current?.setAttribute("baseFrequency", freq.toFixed(5));
        }
      );
    };

    const enter = () => run(maxScale, HOVER_FREQ);
    const leave = () => run(REST_SCALE, REST_FREQ);

    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      cancelRef.current?.();
    };
  }, [maxScale]);

  return (
    <figure
      ref={figureRef}
      className={`liquid ${bare ? "liquid--bare" : ""} ${className}`}
      role="img"
      aria-label={alt || label}
    >
      <svg className="liquid__defs" aria-hidden="true">
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency={REST_FREQ}
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="noise"
            scale={REST_SCALE}
          />
        </filter>
      </svg>

      {src ? (
        <img
          className="liquid__img"
          src={src}
          alt=""
          loading="lazy"
          style={{ filter: `url(#${filterId})` }}
        />
      ) : (
        <span className="liquid__placeholder">{label}</span>
      )}

      {!bare && (
        <>
          <span className="liquid__veil" aria-hidden="true" />
          <span className="liquid__glow" aria-hidden="true" />
          <span className="liquid__vignette" aria-hidden="true" />
        </>
      )}
    </figure>
  );
}
