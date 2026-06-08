import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="top">
      <a href="#top" className="nav__brand" data-cursor>
        <span className="nav__mark">KL</span>
        <span className="nav__name">Kurt&nbsp;Z.&nbsp;Lumpayao</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#work" data-cursor>
          Work
        </a>
        <a href="#about" data-cursor>
          About
        </a>
        <a href="#contact" className="nav__cta" data-cursor>
          Get in touch
        </a>
      </nav>
    </header>
  );
}
