import { projects } from "../data/projects.js";

function Project({ project }) {
  return (
    <article className="card reveal">
      <a
        className="card__media"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
        />
      </a>

      <div className="card__body">
        <header className="card__head">
          <h3 className="card__title">{project.title}</h3>
          <a
            className="card__visit mono"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            visit ↗
          </a>
        </header>

        <p className="card__desc">{project.description}</p>

        {project.details && (
          <dl className="card__details">
            {project.details.map((d) => (
              <div className="card__detail" key={d.label}>
                <dt className="mono">{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="card__tags">
          {project.tags.map((tag) => (
            <li className="mono" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__head">
        <h2 className="section__label mono">
          01 — projects
        </h2>
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
