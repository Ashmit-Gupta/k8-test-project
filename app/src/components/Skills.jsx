import { profile } from "../data/profile";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="frame">
        <p className="eyebrow">Capabilities</p>
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group} className="skills-block">
              <h3>{group}</h3>
              <p>{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
