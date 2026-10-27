import Slide from "./Slide.jsx";
import { FadeUp } from "./Reveal.jsx";

// The kinds of work I take on, as the deck's big numbered list.
const PROCESS = [
  {
    word: "APIs",
    body: "Well-documented Django + DRF and FastAPI services with auth, permissions, and Swagger docs a frontend team can build on immediately.",
  },
  {
    word: "Automation",
    body: "AI-driven workflow automation — wiring language models into the repetitive steps of a process so people do not have to.",
  },
  {
    word: "Payments",
    body: "Stripe Checkout, webhooks, and order lifecycles wired correctly — tested against real payment flows, not just the happy path.",
  },
  {
    word: "Databases",
    body: "Clean PostgreSQL schemas and query optimization so the app stays fast as the data grows instead of degrading quietly.",
  },
  {
    word: "Deployment",
    body: "Dockerized apps on Render, Supabase and Vercel with background workers, monitoring, and CI/CD — shipped, not just written.",
  },
];

export default function Process() {
  return (
    <Slide
      id="process"
      num="2.0"
      title="What I do"
      label="Services"
      meta="Services"
      variant="ink"
    >
      <FadeUp as="p" className="process__intro t-lead">
        The work I take on, end to end.
      </FadeUp>

      <ol className="process__list">
        {PROCESS.map((p, i) => (
          <FadeUp as="li" className="process__row" key={p.word} delay={i * 90}>
            <span className="process__n dot" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="process__word dot">{p.word}</h3>
            <p className="process__desc t-body">{p.body}</p>
          </FadeUp>
        ))}
      </ol>
    </Slide>
  );
}
