import Slide from "./Slide.jsx";
import { FadeUp } from "./Reveal.jsx";
import { projects } from "../data/projects.js";

const STATS = [
  {
    value: String(projects.length).padStart(2, "0"),
    label: "Projects built and deployed",
  },
  { value: "4th", label: "Year, BS Information Technology" },
  { value: "E2E", label: "Data model to deployment" },
  { value: "PH", label: "Based in Davao del Norte" },
];

export default function Metrics() {
  return (
    <Slide
      id="metrics"
      num="5.0"
      title="Metrics"
      meta="By the numbers"
      variant="red"
      className="metrics"
    >
      <div className="split split--rev">
        {/* The giant numeral, as in the reference deck. */}
        <FadeUp className="metrics__big dot" aria-hidden="true">
          {projects.length}
        </FadeUp>

        <dl>
          {STATS.map((s, i) => (
            <FadeUp className="metric" key={s.label} delay={i * 110}>
              <dt className="metric__label mono">{s.label}</dt>
              <dd className="metric__value dot">{s.value}</dd>
            </FadeUp>
          ))}
        </dl>
      </div>
    </Slide>
  );
}
