import { LazyMotion, domAnimation, m } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="hero">
        <div className="hero-content">
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-greeting"
          >
            Hello, I'm
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Eyongtarh Besong
          </m.h1>

          <m.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer
          </m.h2>

          <m.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build modern web applications using React, Django, PostgreSQL and
            JavaScript, transforming ideas into scalable digital solutions.
          </m.p>

          <m.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              Download CV
            </a>
          </m.div>
        </div>

        <m.div
          className="hero-image"
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
        >
          <img
            src="/profile.jpeg"
            alt="Eyongtarh Besong"
            width="420"
            height="420"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </m.div>
      </section>
    </LazyMotion>
  );
}
