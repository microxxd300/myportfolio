import Slide from "./Slide.jsx";
import { RevealLines, FadeUp } from "./Reveal.jsx";

const EMAIL = "kurtlumpayao25@gmail.com";

const INTERESTS = [
  "Software Engineering",
  "AI Engineering",
  "Workflow Automation with AI",
];

// The basic-information block. Rows with an href render as links.
const FACTS = [
  { k: "Name", v: "Kurt Z. Lumpayao" },
  { k: "Title", v: "Software Engineer" },
  { k: "Focus", v: "AI workflow automation" },
  { k: "Location", v: "Davao del Norte, Philippines" },
  { k: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
  {
    k: "GitHub",
    v: "github.com/microxxd300",
    href: "https://github.com/microxxd300",
  },
  {
    k: "LinkedIn",
    v: "in/kurt-lumpayao",
    href: "https://www.linkedin.com/in/kurt-lumpayao-a87643314",
  },
  { k: "Status", v: "Open to freelance and client work" },
];

export default function Profile() {
  return (
    <Slide id="profile" num="1.0" title="Profile" meta="About" variant="paper">
      <div className="split">
        <div>
          <RevealLines
            as="h2"
            className="profile__heading dot h-lg"
            lines={["Shipping real", "systems while", "still in school."]}
          />

          <FadeUp as="p" className="profile__intro t-lead">
            I'm a fourth-year Information Technology student at Davao del Norte
            State College, and every project in this deck is deployed,
            monitored, and serving real users. I learn by shipping the whole
            thing — data model, API, auth, payments, background jobs, and the
            deployment that makes it real.
          </FadeUp>

          <FadeUp className="objective" delay={120}>
            <h3 className="objective__label">Career Objective</h3>
            <p className="objective__text t-body">
              To grow from software engineer into AI engineer, building
              software that automates real-world workflows with AI.
            </p>

            <h3 className="objective__label">Interests</h3>
            <ul className="chips">
              {INTERESTS.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <FadeUp as="dl" className="facts" delay={160}>
          {FACTS.map((f) => (
            <div className="facts__row" key={f.k}>
              <dt>{f.k}</dt>
              <dd>
                {f.href ? (
                  <a
                    href={f.href}
                    target={f.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      f.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {f.v} ↗
                  </a>
                ) : (
                  f.v
                )}
              </dd>
            </div>
          ))}
        </FadeUp>
      </div>
    </Slide>
  );
}
