import { projects } from "../data/projects.js";
import { RevealLines, FadeUp } from "./Reveal.jsx";
import LiquidImage from "./LiquidImage.jsx";

// Titles read "Name — what it is"; the card wants those halves apart.
function splitTitle(title) {
  const [name, ...rest] = title.split("—");
  return { name: name.trim(), kicker: rest.join("—").trim() };
}

export default function Projects() {
  return (
    <section className="section ventures" id="projects">
      <div className="ventures__head">
        <div>
          <p className="eyebrow">Selected Work</p>
          <RevealLines
            as="h2"
            className="ventures__heading display t-h2"
            lines={["Things I built", "and actually shipped."]}
          />
        </div>
        <p className="ventures__count t-eyebrow">
          {String(projects.length).padStart(2, "0")} / Projects
        </p>
      </div>

      <ul className="ventures__list">
        {projects.map((project, i) => {
          const { name, kicker } = splitTitle(project.title);
          return (
            <FadeUp
              as="li"
              key={project.id}
              className="venture"
              delay={i % 2 === 1 ? 120 : 0}
            >
              <article className="venture__card">
                <a
                  className="venture__link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiquidImage
                    src={project.image}
                    alt={`${name} screenshot`}
                    label={name}
                    className="venture__media"
                  />

                  <div className="venture__row">
                    <div className="venture__text">
                      <h3 className="venture__name">{name}</h3>
                      <p className="venture__blurb t-body">
                        {kicker || project.description}
                      </p>
                    </div>
                    <div className="venture__meta">
                      <span className="venture__outcome">Live ↗</span>
                    </div>
                  </div>

                  <p className="venture__cat t-eyebrow">
                    {project.tags.join(" · ")}
                  </p>
                </a>
              </article>
            </FadeUp>
          );
        })}
      </ul>
    </section>
  );
}
