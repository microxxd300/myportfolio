// Drop your photo at assets/profile.png (or .jpg/.webp) and it will
// appear automatically. Until then, the initials block is shown.
const photos = import.meta.glob("../../assets/profile.*", {
  eager: true,
  import: "default",
});
const photo = Object.values(photos)[0];

const LINKS = [
  { label: "github", href: "https://github.com/microxxd300" },
  { label: "linkedin", href: "#" },
  { label: "email", href: "mailto:kurtlumpayao25@gmail.com" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className={`portrait ${photo ? "" : "portrait--empty"}`}>
        {photo ? (
          <img src={photo} alt="Portrait of Kurt Z. Lumpayao" />
        ) : (
          <span className="mono">KZL</span>
        )}
      </div>

      <div className="hero__text">
        <h1 className="hero__name mono">Kurt Z. Lumpayao</h1>
        <p className="hero__bio">
          I'm a backend developer. I build fast, secure REST APIs with Django
          and Python — payments, auth, background jobs, and the details users
          never see — and ship them end to end, from data model to deployment.
        </p>
        <p className="hero__bio">
          Currently a student at Davao del Norte State College, already
          shipping production systems for real users. Available for freelance
          and client work.
        </p>

        <div className="hero__links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="mono"
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <span className="badge mono">
          <span className="badge__dot" /> Available for work
        </span>
      </div>
    </section>
  );
}
