// Add past schools here as they apply — each entry renders as its own
// row with the year pill on the right.
const ENTRIES = [
  {
    degree: "BS Information Technology",
    school: "Davao del Norte State College",
    place: "Davao del Norte, Philippines",
    year: "4th Year",
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section__head">
        <h2 className="section__label mono">04 — education</h2>
      </div>

      <div className="bx edu reveal">
        {ENTRIES.map((e) => (
          <div className="edu__row" key={e.degree}>
            <div className="edu__main">
              <h3 className="bx__title">{e.degree}</h3>
              <p className="bx__sub">{e.school}</p>
              <p className="bx__sub">{e.place}</p>
            </div>
            <span className="pill pill--year">{e.year}</span>
          </div>
        ))}

        <p className="edu__note">
          Studying by day, shipping production systems by night — every project
          above is deployed, monitored, and serving real users.
        </p>
      </div>
    </section>
  );
}
