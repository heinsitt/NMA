import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="top-bar">
      <div className="nav-inner">
        {/* Zone 1: Brand Wordmark */}
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-badge">&lt;NMA /&gt;</span>
          <span>Naing Moe Aung</span>
          <span className="status-pill">
            <span className="status-beacon" />
            <span>Open for Roles</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === 'education' ? 'active' : ''}
              onClick={closeMenu}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-outline nav-cta" onClick={closeMenu}>
            Get in Touch
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '≡'}
          </button>
        </div>
      </div>
    </nav>
  );
};
