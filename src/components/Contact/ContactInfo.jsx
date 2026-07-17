import { motion } from "framer-motion";

const contactItems = [
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Phone",
    value: "+46 XX XXX XX XX",
    link: "tel:+46XXXXXXXX",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "Location",
    value: "Stockholm, Sweden",
    link: null,
  },
];

const socialLinks = [
  {
    icon: "fab fa-github",
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME",
  },
  {
    icon: "fab fa-linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    icon: "fa-solid fa-file-arrow-down",
    name: "Download CV",
    url: "/cv.pdf",
  },
];

export default function ContactInfo() {
  return (
    <motion.aside
      className="contact-info"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>Contact Information</h3>

      <p>
        I'm currently open to freelance opportunities, full-time positions, and
        exciting collaborations. Feel free to reach out through any of the
        channels below.
      </p>

      <div className="contact-list">
        {contactItems.map((item) => (
          <div className="contact-item" key={item.title}>
            <div className="contact-icon">
              <i className={item.icon}></i>
            </div>

            <div>
              <h4>{item.title}</h4>

              {item.link ? (
                <a href={item.link}>{item.value}</a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={
              social.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={social.name}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </motion.aside>
  );
}
