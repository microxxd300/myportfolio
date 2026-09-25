// Grouped so the section reads as a skills summary rather than one
// long undifferentiated chip soup.
const GROUPS = [
  {
    label: "Languages & Frameworks",
    items: ["Python", "Django", "Django REST Framework", "FastAPI"],
  },
  {
    label: "Data & Infrastructure",
    items: ["PostgreSQL", "Redis", "Celery", "Docker"],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "HTML & CSS"],
  },
  {
    label: "Tooling",
    items: ["Git & CI/CD", "Stripe", "JWT / OAuth2", "Swagger"],
  },
];

export default function StackSection() {
  return (
    <section className="section" id="stack">
      <div className="section__head">
        <h2 className="section__label mono">02 — skills</h2>
      </div>

      <div className="stack reveal">
        {GROUPS.map((g) => (
          <div className="bx bx--row" key={g.label}>
            <span className="bx__label">{g.label}</span>
            <span className="bx__rule" aria-hidden="true" />
            <ul className="chiprow">
              {g.items.map((item) => (
                <li className="pill" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
