const SERVICES = [
  {
    title: "REST API Development",
    desc: "Well-documented Django + DRF APIs with auth, permissions, and Swagger docs your frontend team can build on immediately.",
  },
  {
    title: "Payments Integration",
    desc: "Stripe Checkout, webhooks, and order lifecycles wired correctly — tested against real payment flows.",
  },
  {
    title: "Database Design",
    desc: "Clean PostgreSQL schemas and query optimization so your app stays fast as your data grows.",
  },
  {
    title: "Deployment & Ops",
    desc: "Dockerized apps deployed on Render/Supabase with background workers, monitoring, and CI/CD.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section__head">
        <h2 className="section__label mono">03 — services</h2>
      </div>
      <div className="services reveal">
        {SERVICES.map((s) => (
          <div className="bx service" key={s.title}>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
