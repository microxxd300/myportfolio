const NAV = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="#top" className="sidebar__name mono">
        Kurt Z. Lumpayao<span className="sidebar__caret">.</span>
      </a>

      <nav className="sidebar__nav" aria-label="Primary">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="mono">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar__bottom">
        <a
          className="sidebar__mail mono"
          href="mailto:kurtlumpayao25@gmail.com"
        >
          kurtlumpayao25@gmail.com
        </a>
      </div>
    </aside>
  );
}
