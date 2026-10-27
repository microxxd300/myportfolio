import Slide from "./Slide.jsx";
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
    <Slide
      id="education"
      num="7.0"
      title="Education"
      meta="School"
      variant="ink"
    >
      <RevealLines as="h2" className="dot h-lg" lines={["Where I study."]} />

      <ul className="edu__list">
        {ENTRIES.map((e, i) => (
          <FadeUp as="li" className="edu" key={e.degree} delay={i * 110}>
            <div>
              <h3 className="dot h-md">{e.degree}</h3>
              <p className="edu__where t-lead">{e.school}</p>
              <p className="edu__where t-body">{e.place}</p>
            </div>
            <span className="chip edu__year">{e.year}</span>
          </FadeUp>
        ))}
      </ul>
    </Slide>
  );
}
