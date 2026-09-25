const STATS = [
  { value: "03", label: "Live Projects" },
  { value: "Django", label: "Core Stack" },
  { value: "E2E", label: "API to Deploy" },
  { value: "PH", label: "Davao del Norte" },
];

export default function Stats() {
  return (
    <div className="stats reveal">
      {STATS.map((s) => (
        <div className="bx stat" key={s.label}>
          <span className="stat__value mono">{s.value}</span>
          <span className="stat__label mono">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
