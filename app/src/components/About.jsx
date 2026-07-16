import { profile } from "../data/profile";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="frame">
        <p className="eyebrow">About</p>
        <h2>What I do, why, and how</h2>
        <div className="story">
          <article>
            <h3>What</h3>
            <p>
              I build and run the path from code to production: infrastructure,
              CI/CD, containers, and day-2 operations on AWS and Kubernetes.
            </p>
          </article>
          <article>
            <h3>Why</h3>
            <p>
              Good DevOps removes friction. When environments are repeatable and
              deploys are automated, engineers focus on product — not firefighting.
            </p>
          </article>
          <article>
            <h3>How</h3>
            <p>
              Infrastructure as code, automated pipelines, secure access
              patterns, and observable systems. This site is a live example:
              React → Docker → Jenkins → GHCR → Kubernetes.
            </p>
          </article>
        </div>

        <div className="edu">
          <h3>Education</h3>
          <p>
            <strong>{profile.education.degree}</strong> — {profile.education.school}
          </p>
          <p className="edu__meta">
            {profile.education.years} · {profile.education.note}
          </p>
        </div>
      </div>
    </section>
  );
}
