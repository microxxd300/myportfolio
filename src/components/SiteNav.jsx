import { useEffect, useState } from "react";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // The panel covers the page, so stop the page behind it scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="nav">
        <nav className="nav__inner">
          <a className="nav__logo" href="#top">
            <span className="nav__mono">KL</span>
            <span className="nav__name">Kurt Z. Lumpayao</span>
          </a>

          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="nav__link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {open && (
        <div className="menu">
          <ul className="menu__list">
            {LINKS.map((l, i) => (
              <li key={l.href} style={{ "--d": `${120 + i * 70}ms` }}>
                <a
                  className="menu__link display t-h2"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
