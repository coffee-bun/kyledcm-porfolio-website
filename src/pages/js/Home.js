// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    setTimeout(() => {
      navigate('/projects');
    }, 300);
  };

  return (
    <div className="home">
      {/* Section 1 Structure */}
      <div className="section section-1">
        <div className="intro-text">
          <h1 className="typing-1">Hi, I'm Kyle D. Mendoza</h1>
          <h2 className="typing-2">Frontend Developer & QA Tester</h2>
          <div className="subtext">
            I specialize in creating clean, responsive user interfaces and making sure every detail meets a high standard of quality.
          </div>
          <div className="enter-button" onClick={handleEnterClick}>View Projects</div>
        </div>
      </div>

      {/* Section 2 Structure */}
      <div className="section section-2">
        <div className="section2-content">
          <h1 className="section-title">Technical Proficiencies & Tools</h1>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada. 
          </p>

          {/* first Column */}
          <div className="first-column">
            <div className="tech-icons">
              <div className="tech-item">
                <div className="tech-icon html-icon"></div>
                <div className="tech-name">HTML</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon css-icon"></div>
                <div className="tech-name">CSS</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon bootstrap-icon"></div>
                <div className="tech-name">Bootstrap</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon react-icon"></div>
                <div className="tech-name">React</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon javascript-icon"></div>
                <div className="tech-name">JavaScript</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon flask-icon"></div>
                <div className="tech-name">Flask</div>
              </div>
            </div>
          </div>

          {/* second Column */}
          <div className="second-column">
            <div className="tech-icons">
              <div className="tech-item">
                <div className="tech-icon c-icon"></div>
                <div className="tech-name">C</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon cpp-icon"></div>
                <div className="tech-name">C++</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon python-icon"></div>
                <div className="tech-name">Python</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon flutterflow-icon"></div>
                <div className="tech-name">Flutterflow</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon mabl-icon"></div>
                <div className="tech-name">Mabl</div>
              </div>
              <div className="tech-item">
                <div className="tech-icon selenium-icon"></div>
                <div className="tech-name">Selenium</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
