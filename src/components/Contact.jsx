export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__head">
        <h2 className="section__label mono">05 — contact</h2>
      </div>

      <div className="contact reveal">
        <p className="contact__pitch">
          Need a backend built — an API, payments, auth, or a full product?
          I'm available for freelance and client work.
        </p>
        <a
          className="contact__mail mono"
          href="mailto:kurtlumpayao25@gmail.com"
        >
          kurtlumpayao25@gmail.com ↗
        </a>
        <div className="contact__links">
          <a
            className="mono"
            href="https://github.com/microxxd300"
            target="_blank"
            rel="noopener noreferrer"
          >
            github ↗
          </a>
          <a className="mono" href="#" target="_blank" rel="noopener noreferrer">
            linkedin ↗
          </a>
        </div>
      </div>
    </section>
  );
}
