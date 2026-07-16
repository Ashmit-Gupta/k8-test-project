import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import "./ProjectDetail.css";

function DetailBlock({ title, items }) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="detail">
        <div className="frame detail__inner">
          <p className="eyebrow">404</p>
          <h1>Project not found</h1>
          <Link className="btn" to="/#projects" style={{ marginTop: "1.5rem" }}>
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail">
      <div className="detail__hero">
        <div className="frame detail__inner">
          <Link className="detail__back" to="/#projects">
            ← All projects
          </Link>
          <p className="eyebrow">{project.subtitle}</p>
          <h1>{project.title}</h1>
          <p className="detail__summary">{project.summary}</p>
          <div className="detail__meta">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="detail__actions">
            {project.live && (
              <a
                className="btn"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
              </a>
            )}
            {project.github && (
              <a
                className="btn btn-ghost"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="frame detail__body">
        <DetailBlock title="What" items={project.what} />
        <DetailBlock title="Why" items={project.why} />
        <DetailBlock title="How" items={project.how} />
      </div>
    </main>
  );
}
