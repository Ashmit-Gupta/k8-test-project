import { profile } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/hero-harbor.jpg"
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="frame hero__content">
        <div className="brand-lockup">
          <img
            className="brand-logo"
            src="/devops-logo.png"
            alt="DevOps logo"
            width="168"
            height="168"
          />
          <p className="brand">
            Ashmit<span>.</span>devops
          </p>
        </div>

        <div className="hero-copy">
          <h1>Hello — welcome. I&apos;m a DevOps Engineer.</h1>
          <p>{profile.tagline}</p>
        </div>

        <div className="actions">
          <a className="btn" href="#projects">
            View projects
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <p className="meta">
            <span className="status-dot" aria-hidden="true" />
            Live on <strong>Kubernetes</strong>
          </p>
        </div>
      </div>
    </header>
  );
}
