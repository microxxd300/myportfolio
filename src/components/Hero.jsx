export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__meta reveal">
        <span className="badge">
          <span className="badge__dot" /> Open to opportunities
        </span>
        <span className="hero__loc mono">Davao&nbsp;del&nbsp;Norte&nbsp;·&nbsp;PH</span>
      </div>

      <h1 className="hero__title">
        <span className="line">
          <span className="reveal-text">Building reliable</span>
        </span>
        <span className="line">
          <span className="reveal-text">backends with</span>{" "}
          <em className="reveal-text">intent.</em>
        </span>
      </h1>

      <div className="hero__bottom">
        <p className="hero__lede reveal">
          I'm Kurt — a backend developer building fast, secure, and scalable
          systems with Django and Python. Below is a selection of work I'm
          proud of.
        </p>
        <a
          href="#work"
          className="hero__scroll reveal"
          aria-label="Scroll to selected work"
          data-cursor
        >
          <span className="mono">Selected Work</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1v14M8 15l5-5M8 15l-5-5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
