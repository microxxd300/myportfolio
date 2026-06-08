import { useRef } from "react";
import { projects } from "../data/projects.js";

// Built-in CSS mockups so the portfolio looks complete with zero assets.
// Replace this component with an <img> when you have real screenshots.
function Artwork({ type }) {
  switch (type) {
    case "phone":
      return (
        <div className="art art--phone">
          <div className="art__phone">
            <div className="art__notch" />
            <div className="art__screen">
              <div className="art__pill w-40" />
              <div className="art__card" />
              <div className="art__row w-70" />
              <div className="art__row w-50" />
            </div>
          </div>
        </div>
      );
    case "dashboard":
      return (
        <div className="art art--dashboard">
          <div className="art__dash">
            <div className="art__chart">
              {[40, 70, 55, 90, 65].map((h, i) => (
                <span key={i} style={{ "--h": `${h}%` }} />
              ))}
            </div>
            <div className="art__row w-80" />
            <div className="art__row w-55" />
          </div>
        </div>
      );
    case "api":
      return (
        <div className="art art--api">
          <div className="art__api">
            <div className="art__endpoint">
              <span className="art__method">POST</span>
              <span className="art__path">/api/v1/auth/token</span>
            </div>
            <div className="art__json">
              <div className="art__row w-70" />
              <div className="art__row w-90" />
              <div className="art__row w-50" />
            </div>
            <div className="art__status">
              <i />
              200 OK · 38ms
            </div>
          </div>
        </div>
      );
    case "browser":
    default:
      return (
        <div className="art art--browser">
          <div className="art__window">
            <div className="art__bar">
              <i />
              <i />
              <i />
            </div>
            <div className="art__body">
              <div className="art__row w-60" />
              <div className="art__row w-90" />
              <div className="art__grid">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      );
  }
}

function Project({ project, index }) {
  const linkRef = useRef(null);

  // Subtle pointer-follow tilt on the artwork.
  const handleMove = (e) => {
    const el = linkRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
  };

  const handleLeave = () => {
    const el = linkRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <li className="project reveal" style={{ "--accent": project.accent }}>
      <a
        className="project__link"
        href={project.href}
        ref={linkRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor="view"
      >
        <div className="project__visual">
          <span className="project__index mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Artwork type={project.art} />
        </div>

        <div className="project__info">
          <div className="project__top">
            <h3 className="project__title">{project.title}</h3>
            <span className="project__arrow" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M5 17L17 5M17 5H7M17 5v10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <p className="project__desc">{project.description}</p>
          <div className="project__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <section className="work" id="work">
      <div className="section-head reveal">
        <h2 className="section-head__title">Selected Work</h2>
        <p className="section-head__count mono">
          {String(projects.length).padStart(2, "0")} — Projects
        </p>
      </div>

      <ul className="projects">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
}
