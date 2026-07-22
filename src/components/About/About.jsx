import { motion } from "framer-motion";
import "./About.css";

const cards = [
  {
    icon: "fas fa-code",
    title: "Full Stack Development",
    text: "I build scalable web applications using React, Django and PostgreSQL, focusing on clean architecture and performance.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Problem Solver",
    text: "I enjoy transforming complex business ideas into intuitive digital solutions with thoughtful design and functionality.",
  },
  {
    icon: "fas fa-users",
    title: "Business Experience",
    text: "My consulting and entrepreneurial background helps me bridge the gap between technology and real business needs.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="about-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I'm a Full Stack Developer passionate about creating modern,
          responsive and user-friendly applications. I combine software
          engineering with consulting experience to deliver solutions that are
          both technically strong and business focused.
        </motion.p>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <i className={card.icon}></i>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
