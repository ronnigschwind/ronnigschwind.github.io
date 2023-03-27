import React from 'react';
import '../styles/Hero.css';
import Me from '../images/graduation-headshot.JPG';
import { HashLink as Link } from 'react-router-hash-link';

// Hero Section for Homepage
function Hero() {
  return (
    <div className="Hero">
        <div className="heroContent">
            <div className="heroText">
                <h1 style={{ width: "100%", color: "white" }}>Hey, I'm Ronni Gschwind</h1>
                <h2 style={{ width: "100%", color: "white", paddingBotttom: "10px", lineHeight: "2" }}>Web Developer at &nbsp;
                <a href="https://www.artunlimitedusa.com/" className='glowOnHover auBtn' target="_blank" rel="noreferrer" style={{ color: "white", background: "black", 
                padding: "5px", borderRadius: "8px" }}>Art Unlimited</a> </h2>
                <div style={{ marginTop: "40px" }}>
                    <Link to="#projects" className='glowOnHover' style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black", 
                    marginTop: "10px", fontWeight: "bold" }}>Check out my projects</Link>
                </div>
            </div>
            <div className="heroImgDiv">
            <img src={Me} style={{boxShadow: "15px 15px 10px #01a4ff"}} alt="me"/>
            </div>
        </div>
        <Link to="#contact" className='glowOnHover' style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black", fontWeight: "bold" }}>Contact Me</Link>
    </div>
    );
}
    
export default Hero;