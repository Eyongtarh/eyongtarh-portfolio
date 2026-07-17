import { motion } from "framer-motion";
import skills from "../../data/skills";
import "./Skills.css";

function SkillGroup({ title, data }) {
  return (
    <motion.div
      className="skill-group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>

      <div className="badge-container">
        {data.map((skill, index) => (
          <span className="skill-badge" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <SkillGroup title="Frontend" data={skills.frontend} />

        <SkillGroup title="Backend" data={skills.backend} />

        <SkillGroup title="Tools" data={skills.tools} />
      </div>
    </section>
  );
}
