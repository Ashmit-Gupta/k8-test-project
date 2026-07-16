import { profile } from "../data/profile";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="frame foot__inner">
        <p>
          {profile.name} · {profile.role}
        </p>
        <div className="foot__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
