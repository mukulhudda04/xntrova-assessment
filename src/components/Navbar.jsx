import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={handleMenuClick}>
          XNTROVA<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta">
          Let's Talk
          <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={handleMenuClick}>Services</a>
        <a href="#about" onClick={handleMenuClick}>About</a>
        <a href="#process" onClick={handleMenuClick}>Process</a>
        <a href="#work" onClick={handleMenuClick}>Work</a>
        <a href="#contact" onClick={handleMenuClick}>Contact</a>

        <a
          href="#contact"
          className="mobile-nav-cta"
          onClick={handleMenuClick}
        >
          Let's Talk ↗
        </a>
      </nav>
    </header>
  );
}

export default Navbar;