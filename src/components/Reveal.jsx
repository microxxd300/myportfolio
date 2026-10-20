import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView.js";

// Reveals either fire the moment they scroll into view, or — in the
// hero, which waits out the preloader — on a fixed delay after mount.
// Either way a single class flip starts them and CSS transition-delay
// does the staggering.
function useActivate(immediate) {
  const [ref, inView] = useInView();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!immediate) return;
    // Two frames so the initial transform paints before it transitions.
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => cancelAnimationFrame(id);
  }, [immediate]);

  return [ref, immediate ? mounted : inView];
}

/**
 * Letter-by-letter rise, used for the giant hero name. Spaces are kept
 * as their own non-animating spans so word gaps survive the split.
 */
export function RevealLetters({
  text,
  delay = 0,
  stagger = 52,
  immediate = false,
  className = "",
}) {
  const [ref, active] = useActivate(immediate);
  const chars = Array.from(text);

  return (
    <span
      ref={ref}
      className={`rv rv--letters ${active ? "is-in" : ""} ${className}`}
      aria-label={text}
    >
      {chars.map((ch, i) =>
        ch === " " ? (
          <span className="rv__sp" key={i} aria-hidden="true">
            {" "}
          </span>
        ) : (
          <span
            className="rv__i"
            key={i}
            aria-hidden="true"
            style={{ "--d": `${delay + i * stagger}ms` }}
          >
            {ch}
          </span>
        )
      )}
    </span>
  );
}

/**
 * Line-by-line rise. Lines are passed in explicitly rather than measured,
 * so the break points are deliberate instead of whatever the wrap does.
 */
export function RevealLines({
  lines,
  delay = 0,
  stagger = 90,
  immediate = false,
  className = "",
  as: Tag = "span",
}) {
  const [ref, active] = useActivate(immediate);

  return (
    <Tag ref={ref} className={`${active ? "is-in" : ""} ${className}`}>
      {lines.map((line, i) => (
        <span className="rv" key={i}>
          <span
            className="rv__i"
            style={{ "--d": `${delay + i * stagger}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Plain fade-and-rise for blocks of copy, list items and cards.
 */
export function FadeUp({
  children,
  delay = 0,
  immediate = false,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const [ref, active] = useActivate(immediate);

  return (
    <Tag
      ref={ref}
      className={`fade-up ${active ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
