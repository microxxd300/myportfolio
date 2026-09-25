const STACK = [
  "Python",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Docker",
  "Stripe",
  "JWT / OAuth2",
  "React",
  "Vite",
  "Git & CI/CD",
];

export default function StackSection() {
  return (
    <section className="section" id="stack">
      <div className="section__head">
        <h2 className="section__label mono">02 — stack</h2>
      </div>
      <ul className="chips reveal">
        {STACK.map((item) => (
          <li className="mono" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
