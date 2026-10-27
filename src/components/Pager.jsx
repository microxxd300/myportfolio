// One dot per slide down the right edge; the centred slide lights up.
export default function Pager({ slides, active }) {
  if (!slides.length) return null;

  return (
    <nav className="pager" aria-label="Slides">
      {slides.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`pager__dot ${i === active ? "is-active" : ""}`}
          aria-label={s.label}
          aria-current={i === active ? "true" : undefined}
        >
          <span className="pager__label">
            {String(i).padStart(2, "0")} {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
