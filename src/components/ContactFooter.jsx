import Slide from "./Slide.jsx";
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
    <Slide
      id="contact"
      num="8.0"
      title="Contact"
      meta="Open to work"
      variant="red"
    >
      <RevealLines
        as="h2"
        className="dot h-xl"
        lines={["Let's build", "something."]}
      />

      <FadeUp as="p" className="contact__lead t-lead">
        APIs, AI automation, or a full product — I'm available for freelance
        and client work. I read every message I'm sent.
      </FadeUp>

      <FadeUp delay={100}>
        <a className="contact__mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </FadeUp>

      <FadeUp className="contact__links" delay={160}>
        {SOCIAL.map((s) => {
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              className="btn"
              href={s.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {s.label} <span aria-hidden="true">↗</span>
            </a>
          );
        })}
      </FadeUp>

      <footer className="contact__foot mono">
        <span>© {year} Kurt Z. Lumpayao</span>
        <span>Software engineer · Davao del Norte, PH</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </Slide>
  );
}
