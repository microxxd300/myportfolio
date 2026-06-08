const ITEMS = [
  "Django",
  "REST APIs",
  "PostgreSQL",
  "System Design",
  "Backend Engineering",
];

export default function Marquee() {
  // Doubled so the loop is seamless.
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span className="marquee__item" key={i}>
            <span>{item}</span>
            <span className="dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
