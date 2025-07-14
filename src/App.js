import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/js/Home';
import About from './pages/js/About';
import Education from './pages/js/Education';
import Projects from './pages/js/Projects';
import Contact from './pages/js/Contact';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Senpai</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
