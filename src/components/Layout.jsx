import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <h2>Uwimpuhwe Jenifer</h2>
          </div>
          
          <div className="nav-center">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
            <Link to="/skills" className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'}>
              Skills
            </Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
              Projects
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </div>
          
          <div className="nav-right">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Uwimpuhwe Jenifer. All rights reserved.</p>
            <div className="footer-contact">
              <span>📞 0725471028</span>
              <span>✉️ uwimpuhwejennifer@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;