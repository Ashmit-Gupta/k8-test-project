import { profile } from "../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="frame">
        <p className="eyebrow">Next step</p>
        <h2>Let&apos;s talk</h2>
        <p className="contact__lead">
          Open to DevOps, platform, and software engineering roles. Reach out on
          LinkedIn or email — happy to walk through this cluster live.
        </p>
        <div className="contact__actions">
          <a
            className="btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
