// Drop your photo at assets/profile.png (or .jpg/.webp) and it will
// appear automatically. Until then, the initials block is shown.
const photos = import.meta.glob("../../assets/profile.*", {
  eager: true,
  import: "default",
});
const photo = Object.values(photos)[0];

const LINKS = [
  { label: "GitHub", href: "https://github.com/microxxd300", icon: "gh" },
  { label: "Email", href: "mailto:kurtlumpayao25@gmail.com", icon: "mail" },
  { label: "Davao del Norte, PH", href: null, icon: "pin" },
];

const ICONS = {
  gh: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
};

function Icon({ name }) {
  const filled = name === "gh";
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-bento">
      <div className={`bx bx--photo ${photo ? "" : "bx--photo-empty"}`}>
        {photo ? (
          <img src={photo} alt="Portrait of Kurt Z. Lumpayao" />
        ) : (
          <span className="mono">KZL</span>
        )}
      </div>

      <div className="bx bx--bio">
        <h1 className="bio__name">Kurt Z. Lumpayao</h1>
        <p className="bio__text">
          I'm a backend developer building fast, secure REST APIs with Django
          and Python — payments, auth, background jobs, and the details users
          never see — shipped end to end, from data model to deployment.
        </p>
        <span className="badge mono">
          <span className="badge__dot" /> Available for work
        </span>
      </div>

      <div className="bx bx--row bx--contact-row">
        <span className="bx__label">Reach me</span>
        <span className="bx__rule" aria-hidden="true" />
        <div className="chiprow">
          {LINKS.map((l) =>
            l.href ? (
              <a
                key={l.label}
                className="pill"
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  l.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <span className="pill__ico">
                  <Icon name={l.icon} />
                </span>
                {l.label}
              </a>
            ) : (
              <span className="pill" key={l.label}>
                <span className="pill__ico">
                  <Icon name={l.icon} />
                </span>
                {l.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
