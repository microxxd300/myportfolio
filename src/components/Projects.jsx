import { projects } from "../data/projects.js";
import Slide from "./Slide.jsx";
import { FadeUp } from "./Reveal.jsx";
import LiquidImage from "./LiquidImage.jsx";

// Titles read "Name — what it is"; the slide wants those halves apart.
function splitTitle(title) {
  const [name, ...rest] = title.split("—");
  return { name: name.trim(), kicker: rest.join("—").trim() };
}

// Each project gets its own slide, alternating ink and paper.
export default function Projects() {
  return projects.map((project, i) => {
    const { name, kicker } = splitTitle(project.title);
    return (
      <Slide
        key={project.id}
        // The first project slide is what the nav's "Projects" jumps to.
        id={i === 0 ? "projects" : `project-${project.id}`}
        num={`4.${i + 1}`}
        title={`Projects — ${String(i + 1).padStart(2, "0")} / ${String(
          projects.length
        ).padStart(2, "0")}`}
        label={name}
        meta="Live"
        variant={i % 2 === 0 ? "ink" : "paper"}
      >
        <div className="split split--rev">
          <div>
            <FadeUp as="h2" className="dot h-lg">
              {name}
            </FadeUp>
            {kicker && (
              <FadeUp as="p" className="project__kicker t-lead" delay={60}>
                {kicker}
              </FadeUp>
            )}
            <FadeUp as="p" className="project__desc t-body" delay={120}>
              {project.description}
            </FadeUp>

            {project.details && (
              <FadeUp as="dl" className="facts project__specs" delay={180}>
                {project.details.map((d) => (
                  <div className="facts__row" key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </FadeUp>
            )}

            <FadeUp as="ul" className="chips project__tags" delay={220}>
              {project.tags.map((tag) => (
                <li className="chip" key={tag}>
                  {tag}
                </li>
              ))}
            </FadeUp>

            <FadeUp className="project__actions" delay={260}>
              <a
                className="btn"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live <span aria-hidden="true">↗</span>
              </a>
              {project.repo && (
                <a
                  className="btn btn--ghost"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code on GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
            </FadeUp>
          </div>

          <FadeUp className="project__aside" delay={100}>
            <a
              className="project__media"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name}`}
            >
              <LiquidImage
                src={project.image}
                alt={`${name} screenshot`}
                label={name}
                className="project__shot"
              />
            </a>
          </FadeUp>
        </div>
      </Slide>
    );
  });
}
