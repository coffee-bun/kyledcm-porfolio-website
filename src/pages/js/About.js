import React from 'react';
import '../css/About.css';

const techColumn1 = [
  { icon: "html-icon", name: "HTML" },
  { icon: "css-icon", name: "CSS" },
  { icon: "bootstrap-icon", name: "Bootstrap" },
  { icon: "react-icon", name: "React" },
  { icon: "javascript-icon", name: "JavaScript" },
  { icon: "flask-icon", name: "Flask" }
];

const techColumn2 = [
  { icon: "c-icon", name: "C" },
  { icon: "cpp-icon", name: "C++" },
  { icon: "python-icon", name: "Python" },
  { icon: "flutterflow-icon", name: "Flutterflow" },
  { icon: "mabl-icon", name: "Mabl" },
  { icon: "selenium-icon", name: "Selenium" }
];

function About() {
  return (
    <div className="about">
      <div className="abt-section about-1">
        <h1>About</h1>
      </div>

      <div className="abt-section about-2">
        <div className="section2-content">
          <h1 className="section-title">Technical Proficiencies & Tools</h1>
          <p className="section-description">
            Throughout my academic experience, I have worked with a variety of development and testing tools to design and implement systems that are easy and enjoyable for people to use. 
            I focus on building clean, responsive user interfaces while also conducting both functional and usability testing to ensure reliability and quality.
          </p>
          <hr className="section-divider" />

          <div className="first-column">
            <div className="tech-icons">
              {techColumn1.map((tech, i) => (
                <div className="tech-item" key={i}>
                  <div className={`tech-icon ${tech.icon}`}></div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="second-column">
            <div className="tech-icons">
              {techColumn2.map((tech, i) => (
                <div className="tech-item" key={i}>
                  <div className={`tech-icon ${tech.icon}`}></div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
