import { useEffect, useRef, useState } from "react";

// A soft cursor follower that grows on interactive elements and shows
// a "View" label over project cards. Pointer-device only.
export default function Cursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const dot = dotRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf;

    const render = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (dot) dot.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target.closest("[data-cursor], a, button");
      if (target) {
        setActive(true);
        const value = target.getAttribute?.("data-cursor");
        setLabel(value && value !== "" ? value : "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`cursor ${active ? "is-active" : ""} ${
        label ? "has-label" : ""
      }`}
      ref={dotRef}
      aria-hidden="true"
    >
      {label && <span className="cursor__label">{label}</span>}
    </div>
  );
}
