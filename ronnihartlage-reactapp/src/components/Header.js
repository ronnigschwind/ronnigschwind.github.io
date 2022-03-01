import React from 'react';
import '../styles/Header.css';

// maybe?
import { Link, HashRouter as Router } from 'react-router-dom';

// nav bar and seciton above
function Header() {
  return (
    <div className="Header">
      <div className="headerLinks">
          <h2 style={{ display: "inline-block", marginRight: "100px", color: "white", height: "200px"}}>Ronni Hartlage</h2>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/projects" style={{ margin: "10px" }}>Projects</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </div>
      <h1 style={{ position: "absolute", width: "100%", top: "100px", color: "white" }}>Welcome to the Website of Ronni Hartlage!</h1>
      <h2 style={{ position: "absolute", width: "100%", top: "150px", color: "white" }}>This site is a work in progress, but will eventually be a portfolio for Ronni Hartlage.</h2>
      <Link to="/contact" style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black" }}>Contact Ronni</Link>
    </div>
  );
}

export default Header;