import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'particles.js'; // make sure this is here
import '../css/Home.css';

const particleConfig = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
    size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1 } },
    line_linked: { enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1, random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
  },
  retina_detect: true
};

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', particleConfig);
    }
    return () => {
      const particles = document.getElementById('particles-js');
      if (particles) particles.innerHTML = '';
    };
  }, []);

  return (
    <div className="home">
      {/* Section 1 */}
      <div className="section section-1">
        <div className="intro-text">
          <h1 className="typing-1">Hi, I'm Kyle D. Mendoza</h1>
          <h2 className="typing-2">Frontend Developer & QA Tester</h2>
          <div className="subtext">
            Specialize in creating clean, responsive user interfaces and making sure every detail meets a high standard of quality.
          </div>
          <div className="button-group">
            <div className="enter-button" onClick={() => setTimeout(() => navigate('/projects'), 300)}>View Projects</div>
            <div className="hire-button" onClick={() => setTimeout(() => navigate('/contact'), 300)}>Hire Me</div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="section section-middle">
        <div id="particles-js" className="particles-background"></div>
        <div className="middle-content">
          <h1>Creating with Passion, Growing with Every Step</h1>
          <p>
            I believe that every project is a chance to create with purpose, explore new ideas, and grow as a developer.
            My goal is to build quality work while continuously learning and discovering better ways to bring ideas to life.
            If you have a vision, let’s work together to make it real.
          </p>
        </div>
      </div>

{/* Section 2 */}
<div className="section section-2">
  <div className="section2-content">
    <h2 className="section2-title">How I Bring Ideas to Life</h2>
    <div className="three-column-container">
      <div className="column column-1">
        <div className="column-content">
          {/* Column 1 - Front End Development */}
          <div className="front-container"></div>
          <h3 className="column-title">Front End Development</h3>
          <p className="column-description">
            I bring ideas to life in the browser, crafting websites that are fast, 
            responsive, and enjoyable to use. Every line of code is written with 
            the user in mind.
          </p>
        </div>
      </div>
      {/* Column 2 - Web Design */}
      <div className="column column-2">
        <div className="column-content">
          <div className="web-container"></div>
          <h3 className="column-title">Web Design</h3>
          <p className="column-description">
            I design websites that not only look great but feel intuitive, focusing on clean layouts,
            thoughtful details, and ensuring every visitor enjoys the experience.
          </p>
        </div>
      </div>
      {/* Column 3 - Quality Assurance */}
      <div className="column column-3">
        <div className="column-content">
          <div className="quality-container"></div>
          <h3 className="column-title">Quality Assurance</h3>
          <p className="column-description">
            I make sure everything works exactly as it should. Through careful testing and a sharp eye for detail, 
            I help keep projects smooth, reliable, and ready to go.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
       </div>
      );
    }

export default Home;
