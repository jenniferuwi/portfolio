import React from 'react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="toggle-track">
          <div className={`toggle-thumb ${darkMode ? 'dark' : 'light'}`}>
            {darkMode ? '🌙' : '☀️'}
          </div>
        </div>
      </button>
      <span className="theme-label">{darkMode ? 'Dark' : 'Light'} Mode</span>
    </div>
  );
};

export default ThemeToggle;