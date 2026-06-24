import './app.css'
import { useEffect,useState } from 'react';
import Skills from './skills.jsx';
import Projects from './projects.jsx';
export default function Portfolio() {
  const[skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
   const [menuOpen, setMenuOpen] = useState(false);
  
  const skillsList = skills.map(skill => (
    <Skills key={skill.id} logo={skill.logo} name={skill.name} description={skill.description} />
  ));
  useEffect(() => {
    fetch('/data/dummyData.json')
      .then(response => response.json())
      .then(data => {
        setSkills(data.Skills);
        setProjects(data.projects);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  const projectsList = projects.map(project => (
    <Projects key={project.id} image={project.image} name={project.name} description={project.description} />));
    console.log(projectsList);
  return (<><section id='Home'>
    <div className="header">
  <h1>JESHO JL BENEDICT</h1>

  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
  <button className='icon'>☰</button>
  </div>
 <div className={`nav ${menuOpen ? "active" : ""}`}>
  <a href="#Home" onClick={() => setMenuOpen(false)}><h4>Home</h4></a>
  <a href="#about" onClick={() => setMenuOpen(false)}><h4>About me</h4></a>
  <a href="#skills" onClick={() => setMenuOpen(false)}><h4>Skills</h4></a>
  <a href="#projects" onClick={() => setMenuOpen(false)}><h4>Projects</h4></a>
  <a href="#contact" onClick={() => setMenuOpen(false)}><h4>Contact</h4></a>
</div>
</div>
   <div className="main">
    <div className="image">
      <img src="./src/assets/prof-img.jpeg" alt=""  className='prof-img'/>
    </div>
    <div className="intro">
  <h2>Hello, I’m </h2>
  <h1>Jesho JL Benedict</h1>
  <h3>And I'm a <span className='highlight'>Web developer</span></h3>
<p>I create modern, scalable, and responsive web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).</p>
<p className='up'>I’m passionate about turning ideas into interactive and engaging digital experiences.</p>
<a href="./src/resume.pdf" download className="download-btn">Download CV</a>
    </div>
   </div>
   </section>
  <section id="about">
    <div className='about-head'>
    <div className="about">
      <h1>About me</h1> 
<p>➔ Hi, I’m Jesho JL Benedict – 3rd-year CSE student & MERN stack web developer.</p>
<p>➔ I build modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, Node.js.</p>
<p>➔ Passionate about ethical hacking & web security to create safer digital experiences.</p>
<p>➔ I focus on clean, user-friendly designs and smooth user interactions.</p>
<p>➔ Always learning new technologies, frameworks, and best coding practices.</p>
<p>➔ Specialties: Full-stack development, REST APIs, responsive design, UI/UX, database management.</p>
    </div>
    <div className='about-img'>
      <img src="https://www.pngmart.com/files/21/About-Me-Transparent-PNG.png" alt="" className='prof2-img'/>
    </div>
    </div>
  </section>
  <section id='skills'>
        <div className="skills-container">
        <h1>Skills</h1>
        <div className="container">
        {skillsList} 
</div>
        </div>
  </section>
  <section id='projects'>
    <div className='projects-container'>
      <h1>Projects</h1>
        <div className='projects'>{projectsList}</div>
    </div>
  </section>
 <section id='contact'>
  <div className='main-contact'>
  <div className='contact-container'>
    <h1>Contact Me</h1> 
    <div className='mail'>
      <div className="contact-item">     
        <i className='bi bi-envelope'></i>
        <p >jeshojlbenedict94@gmail.com</p>
      </div>
      </div> 
      <div className="contact-item">
        <i className='bi bi-telephone'></i>
        <p>+91 9876543210</p>
      </div>
      <div className="contact-item">
        <i className='bi bi-github'></i>
        <a href="https://github.com/jesho2005" target="_blank"> github.com/jesho2005</a>
      </div>
      <div className="contact-item">
        <i className='bi bi-geo-alt'></i>
        <p>Marthandam, Tamil Nadu, India</p>
    </div>
  </div>
  <div className='msg'>
   
      <form >
    <input type="text" placeholder='Enter Your Name' required/>
    <input type="text" placeholder='Enter Your Email'required/>
    <textarea placeholder='Enter Your Message'></textarea>
    <button type="submit" className='submit'>Send Message</button>
    </form>
   
  </div>
  </div>
   <footer className='footer'><p> &copy; 2025 Jesho JL Benedict. All rights reserved</p></footer>
</section>
   </>
  )
}
  