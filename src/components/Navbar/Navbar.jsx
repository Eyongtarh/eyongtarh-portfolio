import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
      <div className="nav-container">
        <a href="/" className="logo" aria-label="Eyongtarh Besong - Home">
          <img
            src="/logo.png"
            alt="Eyongtarh Besong logo"
            className="logo-image"
            width="48"
            height="48"
          />
          <span>Eyongtarh Besong</span>
        </a>

        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#experience">Experience</a>

          <a href="#education">Education</a>

          <a href="#projects">Projects</a>

          <a href="#interests">Interests</a>

          <a href="#contact">Contact</a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
}
