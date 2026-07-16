import { profile } from "../data/profile";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="frame">
        <p className="eyebrow">Career</p>
        <h2>Experience</h2>
        <ol className="exp-list">
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="exp-item">
              <div className="exp-item__head">
                <h3>
                  {job.title} · {job.company}
                </h3>
                <span>{job.period}</span>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
