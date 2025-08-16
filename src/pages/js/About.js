import React, { useEffect } from 'react';
import '../css/About.css';

function About() {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      const size = Math.random() * 11 + 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 8 + 8}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      if(Math.random() > 0.7) {
        particle.style.backgroundColor = '#181818ff';
        particle.style.borderRadius = '30%';
      }
    });
  }, []);

  return (
    <div className="about">
      {/* Updated Banner Section */}
      <div className="abt-section abt-banner">
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      <div className="abt-banner-content">
        <h1 className="banner-title">About Kyle Mendoza</h1>
        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">About Me</span>
        </div>
        <p className="banner-subtitle">
          Front-End Developer | UI/UX Enthusiast | Quality Assurance Tester. I'm passionate about <br/> turning ideas into functional, 
          user-friendly designs while always striving to improve. I see every <br/> project as a chance to learn, grow, and create something meaningful.
        </p>
      </div>
      </div>

      <div className="abt-section about-1">
        <div className="about1-container">
          <div className="profile-wrapper">
            <div className="profile-image"></div>
          </div>
          <div className="content-section">
            <h2 className="abt-section-title">Behind the Code</h2>
            <p className="abt-section-description">
                I’m Kyle Mendoza, an aspiring IT professional and front-end developer who loves
                creating digital experiences that are both engaging and functional. I enjoy turning ideas
                into responsive, user-friendly websites that not only look good but also work smoothly.
                My skills cover front-end development, UI/UX design, and quality assurance — making
                sure everything I build is reliable, polished, and ready for users. <br/> <br/>

                I’m also really passionate about Quality Assurance Testing. For me, great work isn’t just
                about creating something — it’s about making sure it works exactly as it should. I pay
                close attention to the small details, checking every feature and interaction to make sure it
                meets the standard I’d expect if I were the user. <br/> <br/>

                Whether I’m designing an interface, improving a user experience, or making sure a system
                runs without issues, I always put in creativity, focus, and a commitment to doing the job
                right. Outside of work, I’m constantly learning new tools, exploring fresh ideas, and
                keeping up with the latest tech trends. For me, growth is about learning and applying —
                applying — and I bring that same energy to every project I take on.
            </p>
          </div>
        </div>
      </div>

      <div className="abt-section about-2">
        <h2 className="work-title">The Way I Work</h2>
        <p className="work-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
          rhoncus ut eleifend nibh porttitor.
        </p>
        <div className="about2-content">
          {/* Content removed but container maintained */}
        </div>
      </div>
    </div>
  );
}

export default About;