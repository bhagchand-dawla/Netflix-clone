import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navLinks = ['Home', 'TV Shows', 'Movies'];

function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${showBackground ? 'nav__black' : ''}`}>
      <div className="navbar__left">
        <img
          className="nav__logo"
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="NETFLIX"
        />

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link} href="#" className="navbar__link">
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="navbar__right">
        <button className="navbar__iconButton" type="button" aria-label="Search">
          <span aria-hidden="true">🔍</span>
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
