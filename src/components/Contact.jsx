const SOCIALS = [
  { label: "Email", href: "mailto:kurtlumpayao25@gmail.com" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact__label mono reveal">( Contact )</p>
      <h2 className="contact__headline reveal">
        Have a project in mind?
        <br />
        <a href="mailto:kurtlumpayao25@gmail.com" className="contact__email" data-cursor>
          Let's talk.
        </a>
      </h2>
      <div className="contact__links reveal">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            data-cursor
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
