import { RevealLines, FadeUp } from "./Reveal.jsx";

const STATS = [
  { value: "04", label: "Projects built & deployed" },
  { value: "4th", label: "Year BS Information Technology" },
  { value: "E2E", label: "Data model to deployment" },
  { value: "PH", label: "Based in Davao del Norte" },
];

export default function Impact() {
  return (
    <section className="section impact" id="impact">
      <div className="impact__head">
        <p className="eyebrow">By The Numbers</p>
        <RevealLines
          as="h2"
          className="impact__heading display t-h2"
          lines={["Where it stands."]}
        />
      </div>

      <dl className="impact__grid">
        {STATS.map((s, i) => (
          <FadeUp className="stat" key={s.label} delay={i * 110}>
            <dd className="stat__value display t-display">{s.value}</dd>
            <dt className="stat__label t-body">{s.label}</dt>
          </FadeUp>
        ))}
      </dl>
    </section>
  );
}
