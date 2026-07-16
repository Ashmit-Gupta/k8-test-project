import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="frame">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link className="project-row" to={`/projects/${project.slug}`}>
                <div className="project-row__main">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-row__stack">
                    {project.stack.slice(0, 5).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <span className="project-row__cta">View details →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
