import { RevealLines, FadeUp } from "./Reveal.jsx";

// Add past schools here as they apply — each renders as its own row
// with the year pill on the right.
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
    <section className="section education" id="education">
      <div className="education__head">
        <p className="eyebrow">Education</p>
        <RevealLines
          as="h2"
          className="education__heading display t-h2"
          lines={["Where I'm studying."]}
        />
      </div>

      <ul className="education__list">
        {ENTRIES.map((e, i) => (
          <FadeUp as="li" className="edu" key={e.degree} delay={i * 110}>
            <div className="edu__main">
              <h3 className="edu__degree">{e.degree}</h3>
              <p className="edu__where t-body">{e.school}</p>
              <p className="edu__where t-body">{e.place}</p>
            </div>
            <span className="edu__year t-eyebrow">{e.year}</span>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
