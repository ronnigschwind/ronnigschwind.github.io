import React from 'react';
import '../styles/Header.css';
import { HashLink as Link } from 'react-router-hash-link';

// Header with name and nav bar menu
function Header() {
  return (
    <div className="Header">
      <div className="headerLinks">
          <h2 className="headerName"><Link to="/" style={{ margin: "10px" }}>Ronni Gschwind</Link></h2>
          <Link to="#projects" style={{ margin: "10px" }}>Projects</Link>
          <Link to="#work-experience" style={{ margin: "10px" }}>Work Experience</Link>
          <Link to="#contact" style={{ margin: "10px" }}>Contact</Link>
      </div>
    </div>
  );
}

export default Header;