import { motion } from "framer-motion";

export default function TimelineItem({ item, index }) {
  return (
    <motion.article
      className="timeline-item"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-marker">
        <i className={item.icon}></i>
      </div>

      <div className="timeline-card">
        <span className="timeline-period">{item.period}</span>

        <h3>{item.role}</h3>

        <h4>{item.company}</h4>

        <p className="timeline-location">
          <i className="fa-solid fa-location-dot"></i>
          {item.location}
        </p>

        <p className="timeline-summary">{item.summary}</p>

        <ul>
          {item.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="timeline-skills">
          {item.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
