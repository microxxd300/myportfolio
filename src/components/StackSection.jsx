import Slide from "./Slide.jsx";
import { RevealLines, FadeUp } from "./Reveal.jsx";

const GROUPS = [
  {
    label: "Languages & Frameworks",
    items: ["Python", "Django", "Django REST Framework", "FastAPI"],
  },
  {
    // All drawn from the projects in this deck.
    label: "AI & LLMs",
    items: ["LLM APIs", "Gemini", "Groq", "Ollama", "Workflow Automation"],
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
    items: ["Git & GitHub", "CI/CD", "Stripe", "JWT / OAuth2", "Pytest"],
  },
];

export default function StackSection() {
  return (
    <Slide id="skills" num="6.0" title="Skills" meta="Toolkit" variant="paper">
      <RevealLines
        as="h2"
        className="dot h-lg"
        lines={["What I build with."]}
      />

      <ul className="skills__list">
        {GROUPS.map((g, i) => (
          <FadeUp as="li" className="skillrow" key={g.label} delay={i * 90}>
            <h3 className="mono">{g.label}</h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </ul>
    </Slide>
  );
}
