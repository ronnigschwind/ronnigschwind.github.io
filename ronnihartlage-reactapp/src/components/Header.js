import React from 'react';
import '../styles/Header.css';
import { Link} from 'react-router-dom';
import RH from '../images/RH.png';
import Me from '../images/me.jpg';

// nav bar and seciton above
function Header() {
  return (
    <div className="Header">
      <div className="headerLinks">
          {/* <img src={RH} style={{ height: "30px" }} alt="logo"/> */}
          <h2 style={{ display: "inline-block", marginRight: "100px", color: "white", height: "100px"}}>Ronni Hartlage</h2>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/projects" style={{ margin: "10px" }}>Projects</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </div>
      <div style={{ display: 'flex', marginBottom: "50px" }}>
        <div style={{ width: "50%", paddingTop: "120px" }}>
          <h1 style={{ width: "100%", color: "white" }}>Hey, I'm Ronni Hartlage</h1>
          <h2 style={{ width: "100%", color: "white", paddingBotttom: "10px", lineHeight: "2" }}>Web Developer at <a href="https://www.artunlimitedusa.com/" target="_blank" style={{ color: "white", background: "black", padding: "5px", borderRadius: "8px" }}>Art Unlimited</a> & <br/> Student at <a href="https://www.wright.edu/" target="_blank" style={{ color: "white", background: "black", padding: "5px", borderRadius: "8px" }}>Wright State University</a> </h2>
          <div style={{ marginTop: "40px" }}>
            <Link to="/projects" style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black", marginTop: "10px" }}>Check out my projects</Link>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img src={Me} style={{ maxHeight: "400px", transform: "rotate(-20deg)"}} alt="me"/>
        </div>
      </div>
      <Link to="/contact" style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black" }}>Contact Me</Link>
    </div>
  );
}

export default Header;