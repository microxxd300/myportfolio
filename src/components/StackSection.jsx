import { RevealLines, FadeUp } from "./Reveal.jsx";

const GROUPS = [
  {
    label: "Languages & Frameworks",
    items: ["Python", "Django", "Django REST Framework", "FastAPI"],
  },
  {
    label: "Data & Infrastructure",
    items: ["PostgreSQL", "Supabase", "Redis", "Celery", "Docker"],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "HTML & CSS"],
  },
  {
    label: "Tooling",
    items: ["Git & CI/CD", "Stripe", "JWT / OAuth2", "Swagger", "Pytest"],
  },
];

export default function StackSection() {
  return (
    <section className="section skills" id="skills">
      <div className="skills__head">
        <p className="eyebrow">The Toolkit</p>
        <RevealLines
          as="h2"
          className="skills__heading display t-h2"
          lines={["What I build with."]}
        />
      </div>

      <ul className="skills__list">
        {GROUPS.map((g, i) => (
          <FadeUp as="li" className="skillrow" key={g.label} delay={i * 90}>
            <h3 className="skillrow__label t-body">{g.label}</h3>
            <ul className="skillrow__chips">
              {g.items.map((item) => (
                <li className="chip t-eyebrow" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
