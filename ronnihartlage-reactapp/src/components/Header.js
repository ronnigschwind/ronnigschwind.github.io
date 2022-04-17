import React from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';

// Header with name and nav bar menu
function Header() {
  return (
    <div className="Header">
      <div className="headerLinks">
          <h2 className="headerName"><Link to="/" style={{ margin: "10px" }}>Ronni Hartlage</Link></h2>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/projects" style={{ margin: "10px" }}>Projects</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </div>
    </div>
  );
}

export default Header;