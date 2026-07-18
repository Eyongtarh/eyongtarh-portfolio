import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      <img src={project.image} alt={project.name} className="project-image" />

      <div className="project-body">
        <span className="project-highlight">{project.highlight}</span>

        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-info">
          <span>⭐⭐ {project.stargazers_count}</span>

          <span>🍴 {project.forks_count}</span>

          <span>{project.language}</span>
        </div>

        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View the live demo for ${project.name} (opens in a new tab)`}
            >
              Live Demo
            </a>
          )}

          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
