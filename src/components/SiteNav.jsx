import { useEffect, useState } from "react";

const LINKS = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const MARK = Array.from({ length: 9 });

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
        <nav className="nav__inner" aria-label="Primary">
          <a className="nav__logo" href="#top">
            <span className="nav__mark" aria-hidden="true">
              {MARK.map((_, i) => (
                <i key={i} />
              ))}
            </span>
            Kurt Z. Lumpayao
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

          <a className="btn nav__cta" href="mailto:kurtlumpayao25@gmail.com">
            Say hi <span aria-hidden="true">↗</span>
          </a>

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
              <li key={l.href}>
                <a
                  className="menu__link dot"
                  href={l.href}
                  style={{ "--d": `${120 + i * 70}ms` }}
                  onClick={() => setOpen(false)}
                >
                  <small>{String(i + 1).padStart(2, "0")}</small>
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
