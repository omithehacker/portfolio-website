import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function onClickOutside(e) {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu open (mobile)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">OA</div>

      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}
