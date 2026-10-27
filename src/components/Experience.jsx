import Slide from "./Slide.jsx";
import { RevealLines, FadeUp } from "./Reveal.jsx";

// `period` and `body` are optional — an entry renders cleanly without
// them, so leave a field out rather than guess at it.
const ENTRIES = [
  {
    role: "AI Workflow Automation",
    org: "Chicago Technological Group",
  },
];

export default function Experience() {
  return (
    <Slide
      id="experience"
      num="3.0"
      title="Experience"
      meta="Work"
      variant="red"
    >
      <RevealLines as="h2" className="dot h-lg" lines={["Where I've worked."]} />

      <ul className="exp__list">
        {ENTRIES.map((e, i) => (
          <FadeUp
            as="li"
            className="exp__row"
            key={`${e.org}-${e.role}`}
            delay={i * 110}
          >
            <div>
              <h3 className="dot h-md">{e.role}</h3>
              <p className="exp__org t-lead">{e.org}</p>
              {e.body && <p className="exp__body t-body">{e.body}</p>}
            </div>
            {e.period && <span className="chip exp__period">{e.period}</span>}
          </FadeUp>
        ))}
      </ul>
    </Slide>
  );
}
