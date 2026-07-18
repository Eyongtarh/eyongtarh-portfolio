import { motion } from "framer-motion";
import "./Education.css";

const education = [
  {
    icon: "fas fa-laptop-code",
    title: "Diploma in Full Stack Software Development",
    subtitle: "Code Institute (University of the West of Scotland accredited)",
    period: "06/2024 - 03/2026",
    text: "Comprehensive training in modern full-stack software development, including React, JavaScript, Python, Django, PostgreSQL, Git, Agile methodologies and cloud deployment.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "MSc in Economics",
    subtitle: "University of Gothenburg, Sweden",
    period: "2009/2010-2011/12, 67.5 credits",
    text: "Advanced studies in economics with emphasis on quantitative analysis, economic policy and research methods.",
  },
  {
    icon: "fas fa-university",
    title: "BSc in Economics",
    subtitle: "University of Buea, Cameroon",
    period: "2001/2002-2003/2004",
    text: "Built a strong foundation in economics, finance, statistics, management and business analysis.",
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.article
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <i className={item.icon}></i>

              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              {item.period && <span>{item.period}</span>}

              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
