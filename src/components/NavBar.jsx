import React, { useState, useEffect } from "react";
import "./NavBar.css";
import ThemeToggle from "./ThemeToggle";
import resume from "../assets/resume/yohans(John)_bekele_Resume.pdf";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#aboutMe", label: "About", number: "01" },
    { href: "#skills", label: "Skills", number: "02" },
    { href: "#projects", label: "Projects", number: "03" },
    { href: "#experience", label: "Experience", number: "04" },
    { href: "#contactMe", label: "Contact", number: "05" }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#" className="logo-link">
            <span className="logo-bracket">{"<"}</span>
            <span className="logo-text">YB</span>
            <span className="logo-bracket">{"/>"}</span>
          </a>
        </div>

        <div className={`navbar-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <span className="link-number">{link.number}.</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a href={resume} rel="noreferrer" target="_blank">
              <button className="btn-secondary navbar-resume">
                Resume
              </button>
            </a>
            <ThemeToggle />
          </div>
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
