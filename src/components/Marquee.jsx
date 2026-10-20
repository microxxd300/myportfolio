const WORDS = [
  "Ship End To End",
  "Secure By Default",
  "Test The Edges",
  "Measure Before Guessing",
  "Deploy Often",
];

export default function Marquee() {
  // The list is rendered twice and the track travels -50%, so the loop
  // closes on itself with no visible seam.
  const run = [...WORDS, ...WORDS];

  return (
    <section className="marquee" aria-label="Operating principles">
      <div className="marquee__track">
        {run.map((word, i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= WORDS.length}>
            <span className="display t-h2">{word}</span>
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </section>
  );
}
