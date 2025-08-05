import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';
import './App.css';
import Home from './pages/js/Home';
import About from './pages/js/About';
import Education from './pages/js/Education';
import Projects from './pages/js/Projects';
import Contact from './pages/js/Contact';

function Bookmark({ currentPage }) {
  const pageNames = {
    '/': 'Home',
    '/about': 'About',
    '/education': 'Education',
    '/projects': 'Projects',
    '/contact': 'Contact'
  };

  return (
    <div className="bookmark">
      <div className="bookmark-content">
        <span>{pageNames[currentPage] || 'Portfolio'}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
          <span className="divider">|</span>
          <span>kyledmendoza02@gmail.com</span>
          <span className="divider">|</span>
          <span>+63 9946432071</span>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Viber"><SiViber /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const location = useLocation();
  
  const handleShareClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="App">
      <Bookmark currentPage={location.pathname} />
      <nav className="navbar">
        <div className="nav-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="#" onClick={handleShareClick} className="share-link">
                Share
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;