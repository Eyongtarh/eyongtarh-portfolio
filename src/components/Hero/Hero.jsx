import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-greeting"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A. Eyongtarh Besong
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build modern web applications using React, Django, PostgreSQL and
          JavaScript, transforming ideas into scalable digital solutions.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="/cv.pdf" className="btn secondary-btn">
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      >
        <img src="/profile.png" alt="Eyongtarh" />
      </motion.div>
    </section>
  );
}
