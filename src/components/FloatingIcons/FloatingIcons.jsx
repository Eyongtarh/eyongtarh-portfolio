import { LazyMotion, domAnimation, m } from "framer-motion";
import "./FloatingIcons.css";

const icons = [
  {
    icon: "devicon-react-original",
    name: "React",
    top: "12%",
    left: "5%",
    duration: 12,
    delay: 0,
  },
  {
    icon: "devicon-javascript-plain",
    name: "JavaScript",
    top: "18%",
    right: "8%",
    duration: 11,
    delay: 1,
  },
  {
    icon: "devicon-python-plain",
    name: "Python",
    top: "58%",
    left: "4%",
    duration: 13,
    delay: 2,
  },
  {
    icon: "devicon-django-plain",
    name: "Django",
    top: "74%",
    right: "6%",
    duration: 12,
    delay: 1,
  },
  {
    icon: "devicon-postgresql-plain",
    name: "PostgreSQL",
    top: "38%",
    right: "18%",
    duration: 14,
    delay: 2,
  },
  {
    icon: "devicon-html5-plain",
    name: "HTML5",
    top: "82%",
    left: "20%",
    duration: 10,
    delay: 3,
  },
  {
    icon: "devicon-css3-plain",
    name: "CSS3",
    top: "25%",
    left: "32%",
    duration: 13,
    delay: 1,
  },
  {
    icon: "devicon-git-plain",
    name: "Git",
    top: "72%",
    left: "42%",
    duration: 11,
    delay: 2,
  },
  {
    icon: "devicon-github-original",
    name: "GitHub",
    top: "32%",
    left: "80%",
    duration: 15,
    delay: 4,
  },
  {
    icon: "devicon-vercel-original",
    name: "Vercel",
    top: "86%",
    right: "28%",
    duration: 12,
    delay: 2,
  },
];

export default function FloatingIcons() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="floating-icons" aria-hidden="true">
        {icons.map((item) => (
          <m.div
            key={item.name}
            className="floating-icon-card"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [-5, 5, -5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <i className={item.icon}></i>
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}
