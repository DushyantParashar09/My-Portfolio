import React, { useState } from 'react';

export default function Navbar({ activeSection, onSelectSection, onOpenCli }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'works', label: 'works' },
    { id: 'skills', label: 'skills' },
    { id: 'certificates', label: 'certificates' },
    { id: 'blogs', label: 'blogs' },
    { id: 'contact', label: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (onSelectSection) {
      onSelectSection(id);
    }

    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (window.history.pushState) {
        window.history.pushState(null, '', '#home');
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 75;
      const currentScrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
      const elementTop = element.getBoundingClientRect().top + currentScrollY;
      
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: 'smooth'
      });
      
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-container">
        <a 
          href="#home" 
          className="nav-brand" 
          aria-label="Dushyant Parashar Home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="brand-indicator"></span>
          <span className="brand-name">Dushyant</span>
        </a>

        <nav aria-label="Primary Navigation">
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="navMenu">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-status">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>ONLINE</span>
          </div>

          <button
            className="cli-toggle-btn cli-trigger"
            onClick={onOpenCli}
            title="Launch Interactive Hacker CLI (Hotkey: ~)"
            aria-label="Open CLI Terminal"
          >
            <span>&gt;_ shell</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
