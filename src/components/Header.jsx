import React from 'react';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2> I'm uwimpuhwe Jenifer</h2>
          </div>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <span className="sun-icon">☀️</span>
              ) : (
                <span className="moon-icon">🌙</span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;