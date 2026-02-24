import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navLinks = ['Home', 'TV Shows', 'Movies'];

function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackground(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${showBackground ? 'nav__black' : ''}`}>
      <div className="navbar__left">
        <span className="nav__logo" aria-label="Netflix logo">
          NETFLIX
        </span>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button key={link} type="button" className="navbar__link">
              {link}
            </button>
          ))}
        </nav>
      </div>

      <div className="navbar__right">
        <button className="navbar__iconButton" type="button" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile avatar"
        />
      </div>
    </header>
  );
}

export default Navbar;
