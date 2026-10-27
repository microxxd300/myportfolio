const MARK = Array.from({ length: 9 });

/**
 * One card in the deck. The outer <section> is what the stack measures
 * and what anchors link to; the inner card is what tilts.
 */
export default function Slide({
  id,
  num,
  title,
  meta,
  label,
  variant = "paper",
  className = "",
  children,
}) {
  return (
    <section className="slide-wrap" id={id} data-label={label || title}>
      <div className={`slide slide--${variant} ${className}`}>
        <header className="slide__bar">
          <span className="slide__mark" aria-hidden="true">
            {MARK.map((_, i) => (
              <i key={i} />
            ))}
          </span>
          <span className="slide__num">{num}</span>
          <p className="slide__title">{title}</p>
          {meta && (
            <span className="slide__meta">
              {meta}
              <span className="slide__led" aria-hidden="true" />
            </span>
          )}
        </header>
        <div className="slide__body">{children}</div>
      </div>
    </section>
  );
}
