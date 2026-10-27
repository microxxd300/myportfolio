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
    <section className="section experience" id="experience">
      <div className="experience__head">
        <p className="eyebrow">Experience</p>
        <RevealLines
          as="h2"
          className="experience__heading display t-h2"
          lines={["Where I've worked."]}
        />
      </div>

      <ul className="experience__list">
        {ENTRIES.map((e, i) => (
          <FadeUp
            as="li"
            className="job"
            key={`${e.org}-${e.role}`}
            delay={i * 110}
          >
            <div className="job__main">
              <h3 className="job__role">{e.role}</h3>
              <p className="job__org t-body">{e.org}</p>
              {e.body && <p className="job__body t-body">{e.body}</p>}
            </div>
            {e.period && (
              <span className="job__period t-eyebrow">{e.period}</span>
            )}
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
