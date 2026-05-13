import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/* External link icon for Resume */
function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="header__external-icon"
    >
      <path
        d="M10 6v4a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h4M7 1h4v4M5 7l6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Saurabh Bhojane
        </Link>

        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`} />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <Link
            to="/work"
            className={`header__link ${location.pathname === '/work' ? 'header__link--active' : ''}`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`header__link ${location.pathname === '/about' ? 'header__link--active' : ''}`}
          >
            About
          </Link>
          <a
            href="/Saurabhdesign_resume_13%20May.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link header__link--external"
          >
            Resume
            <ExternalLinkIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
