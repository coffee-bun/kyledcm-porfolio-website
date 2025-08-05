import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    setTimeout(() => {
      navigate('/projects');
    }, 300); // Small delay for smoother experience
  };

  return (
    <div className="home">
            {/* Section 1 Structure */}
      <div className="section section-1">
        <div className="intro-text">
          <h1 className="typing-1">Hi, I'm Kyle D. Mendoza</h1>
          <h2 className="typing-2">Frontend Developer & QA Tester</h2>
          <div className="enter-button" onClick={handleEnterClick}>ENTER</div>
        </div>
      </div>

      {/* Section 2 Structure */}
      <div className="section section-2">
        <h1>Welcome to Section 2</h1>
      </div>
    </div>
  );
}

export default Home;
