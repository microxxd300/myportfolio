import { RevealLines, FadeUp } from "./Reveal.jsx";

// The work I take on, numbered. These are the services the portfolio
// has always listed — here they double as the story's through-line.
const PRINCIPLES = [
  {
    n: "01",
    title: "REST API development",
    body: "Well-documented Django + DRF and FastAPI services with auth, permissions, and Swagger docs a frontend team can build on immediately.",
  },
  {
    n: "02",
    title: "Payments integration",
    body: "Stripe Checkout, webhooks, and order lifecycles wired correctly — tested against real payment flows, not just the happy path.",
  },
  {
    n: "03",
    title: "Database design",
    body: "Clean PostgreSQL schemas and query optimization so the app stays fast as the data grows instead of degrading quietly.",
  },
  {
    n: "04",
    title: "Deployment and ops",
    body: "Dockerized apps on Render and Supabase with background workers, monitoring, and CI/CD — shipped, not just written.",
  },
];

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="story__grid">
        <div className="story__left">
          <p className="eyebrow">The Story</p>

          <RevealLines
            as="h2"
            className="story__heading display t-h2"
            lines={["Shipping real systems", "while still in school."]}
          />

          <FadeUp as="p" className="story__body t-lead">
            I'm a fourth-year Information Technology student at Davao del Norte
            State College, and every project on this page is deployed,
            monitored, and serving real users. I learn by shipping the whole
            thing — data model, API, auth, payments, background jobs, and the
            deployment that makes it real.
          </FadeUp>
        </div>

        <ul className="story__list">
          {PRINCIPLES.map((p, i) => (
            <FadeUp as="li" className="principle" key={p.n} delay={i * 90}>
              <span className="principle__n">{p.n}</span>
              <div>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body t-body">{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
