import { RevealLines, FadeUp } from "./Reveal.jsx";

const EMAIL = "kurtlumpayao25@gmail.com";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/microxxd300" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kurt-lumpayao-a87643314",
  },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export default function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="contact" id="contact">
      <p className="eyebrow">Let's Build</p>

      <RevealLines
        as="h2"
        className="contact__heading display t-h1"
        lines={["Got a backend", "that needs building?"]}
      />

      <FadeUp as="p" className="contact__lead t-lead">
        APIs, payments, auth, or a full product — I'm available for freelance
        and client work. I read every message I'm sent.
      </FadeUp>

      <FadeUp delay={120}>
        <a className="contact__mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
          <span className="contact__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </FadeUp>

      <div className="footbar">
        <div className="footbar__sig">
          <p className="display t-h2">Kurt Z. Lumpayao</p>
          <p className="footbar__tag t-eyebrow">
            Software engineer · Davao del Norte, PH
          </p>
        </div>

        <nav className="footbar__nav" aria-label="Social">
          <ul>
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  className="footbar__link t-body"
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footbar__copy t-eyebrow">
          © {year} Kurt Z. Lumpayao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
