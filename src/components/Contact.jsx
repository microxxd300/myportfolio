const EMAIL = "kurtlumpayao25@gmail.com";

const DETAILS = [
  { label: EMAIL, href: `mailto:${EMAIL}` },
  { label: "github.com/microxxd300", href: "https://github.com/microxxd300" },
  { label: "Davao del Norte, Philippines", href: null },
  { label: "Open to freelance work", href: null },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__head">
        <h2 className="section__label mono">05 — contact</h2>
      </div>

      <div className="contact reveal">
        <div className="bx contact__card">
          <p className="contact__pitch">
            Need a backend built — an API, payments, auth, or a full product?
            I'm available for freelance and client work.
          </p>
          <a className="contact__mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        <div className="bx bx--row contact__details">
          <span className="bx__label">Details</span>
          <span className="bx__rule" aria-hidden="true" />
          <ul className="chiprow">
            {DETAILS.map((d) => (
              <li key={d.label}>
                {d.href ? (
                  <a
                    className="pill"
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      d.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {d.label}
                  </a>
                ) : (
                  <span className="pill">{d.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
