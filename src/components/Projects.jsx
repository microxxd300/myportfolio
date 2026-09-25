import { projects } from "../data/projects.js";

// The compact card shows the stack line rather than the full detail
// table — the long-form details stay in projects.js.
function stackLine(project) {
  const stack = project.details?.find((d) => d.label === "Tech Stack");
  return stack ? stack.value : project.tags.join(" · ");
}

function Project({ project }) {
  return (
    <article className="pcard reveal">
      <a
        className="pcard__media"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
        />
      </a>

      <div className="pcard__body">
        <div className="pcard__text">
          <h3 className="pcard__title">{project.title}</h3>
          <p className="pcard__meta">{stackLine(project)}</p>
        </div>

        <a
          className="pcard__go"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__head">
        <h2 className="section__label mono">01 — projects</h2>
        <a
          className="section__more mono"
          href="https://github.com/microxxd300"
          target="_blank"
          rel="noopener noreferrer"
        >
          all projects →
        </a>
      </div>

      <div className="cards">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
