import { LazyMotion, domAnimation, m } from "framer-motion";
import "./FloatingIcons.css";

const icons = [
  {
    icon: "devicon-react-original",
    className: "react",
  },
  {
    icon: "devicon-python-plain",
    className: "python",
  },
  {
    icon: "devicon-django-plain",
    className: "django",
  },
  {
    icon: "devicon-postgresql-plain",
    className: "postgres",
  },
];

export default function FloatingIcons() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="floating-icons" aria-hidden="true">
        {icons.map((item, index) => (
          <m.div
            key={item.className}
            className={`floating-icon ${item.className}`}
            animate={{
              y: [0, -15, 0],
              rotate: [-6, 6, -6],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            <i className={item.icon}></i>
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}
