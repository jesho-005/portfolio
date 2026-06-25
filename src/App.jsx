import './App.css'
import { useEffect, useRef, useState } from 'react';
import Skills from './skills.jsx';
import Projects from './projects.jsx';

export default function Portfolio() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/dummyData.json`)
      .then(response => response.json())
      .then(data => {
        setSkills(data.Skills);
        setProjects(data.projects);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuOpen) return;
      if (
        navRef.current && !navRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const skillsList = skills.map(skill => (
    <Skills
      key={skill.id}
      logo={skill.logo}
      name={skill.name}
      description={skill.description}
    />
  ));

  const projectsList = projects.map(project => (
    <Projects
      key={project.id}
      image={project.image}
      name={project.name}
      description={project.description}
    />
  ));

  return (
    <>
      <header className="header container-wide">
        <div className="brand">
          <h1>Jesho JL Benedict</h1>
        </div>

        <button
          ref={buttonRef}
          className="icon menu-icon"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav ref={navRef} className={`nav ${menuOpen ? 'active' : ''}`}>
          <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section id="Home" className="container-wide hero">
        <div className="hero-copy">
          <h2>Hello, I’m Jesho</h2>
          <h1>Web developer building modern MERN experiences</h1>
          <h3>I design responsive apps that feel fast, polished, and easy to navigate.</h3>
          <p>
            I create modern, scalable web applications using MongoDB, Express.js,
            React.js, and Node.js. I enjoy building polished UI, smooth mobile
            experiences, and deployable portfolio code.
          </p>

          <div className="cta-row">
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="primary-btn">
              Download CV
            </a>
            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img
              src={`${import.meta.env.BASE_URL}prof-img.jpeg`}
              alt="Jesho Benedict profile"
            />
          </div>
        </div>
      </section>

      <section id="about" className="container-wide">
        <div className="about-grid">
          <article className="about-card">
            <h1>About me</h1>
            <p>Hi, I’m Jesho JL Benedict — a 3rd-year CSE student and MERN stack developer.</p>
            <p>I build modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js.</p>
            <p>I care about clean, accessible interfaces, thoughtful interactions, and secure web experiences.</p>
            <p>I’m always learning new tools, improving my UI skills, and building projects that solve real problems.</p>
            <p>Specialties: Full-stack development, REST APIs, responsive design, UI/UX, and database management.</p>
          </article>
          <div className="about-image">
            <img
              src="https://www.pngmart.com/files/21/About-Me-Transparent-PNG.png"
              alt="Illustration of a person working on code"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="container-wide">
        <div className="section-heading">
          <h1>Skills</h1>
        </div>
        <div className="skills-list">{skillsList}</div>
      </section>

      <section id="projects" className="container-wide">
        <div className="section-heading">
          <h1>Projects</h1>
        </div>
        <div className="projects-grid">{projectsList}</div>
      </section>

      <section id="contact" className="container-wide">
        <div className="contact-grid">
          <div className="contact-panel">
            <h1>Contact me</h1>
            <div className="contact-meta">
              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <p>jeshojlbenedict94@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <p>+91 9876543210</p>
              </div>
              <div className="contact-item">
                <i className="bi bi-github"></i>
                <a href="https://github.com/jesho2005" target="_blank" rel="noreferrer">
                  github.com/jesho2005
                </a>
              </div>
              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <p>Marthandam, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h1>Send a message</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Your message" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Jesho JL Benedict. All rights reserved.</p>
      </footer>
    </>
  );
}
