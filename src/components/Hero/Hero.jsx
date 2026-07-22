import { LazyMotion, domAnimation, m } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="hero" id="home">
        <div className="hero-content">
          <m.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Hello, I'm
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Eyongtarh Besong
          </m.h1>

          <m.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Full Stack Developer
          </m.h2>

          <m.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            I build modern web applications using React, Django, PostgreSQL and
            JavaScript, transforming ideas into scalable digital solutions.
          </m.p>

          <m.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: {
              delay: 0.5,
              duration: 0.8,
            },
            scale: {
              delay: 0.5,
              duration: 0.8,
            },
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
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
