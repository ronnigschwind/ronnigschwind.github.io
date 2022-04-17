import React from 'react';
import '../styles/Hero.css';
import { Link} from 'react-router-dom';
import Me from '../images/me.jpg';

// Hero Section for Homepage
function Hero() {
  return (
    <div className="Hero">
        <div className="heroContent">
            <div className="heroText">
                <h1 style={{ width: "100%", color: "white" }}>Hey, I'm Ronni Hartlage</h1>
                <h2 style={{ width: "100%", color: "white", paddingBotttom: "10px", lineHeight: "2" }}>Web Developer at <a href="https://www.artunlimitedusa.com/" target="_blank" style={{ color: "white", background: "black", padding: "5px", borderRadius: "8px" }}>Art Unlimited</a> & <br/> Student at <a href="https://www.wright.edu/" target="_blank" style={{ color: "white", background: "black", padding: "5px", borderRadius: "8px" }}>Wright State University</a> </h2>
                <div style={{ marginTop: "40px" }}>
                    <Link to="/projects" style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black", marginTop: "10px", fontWeight: "bold" }}>Check out my projects</Link>
                </div>
            </div>
            <div className="heroImgDiv">
            {/* possibly put divs outlined with other colors behind image */}
            {/* <div style={{ border: "2px solid #29b0ff", height: "400px", width: "424px", position: "absolute" }}></div>
            <div style={{ border: "2px solid #40ff2b", height: "400px", width: "424px", position: "absolute", transform: "rotate(20deg)" }}></div> */}
            <img src={Me} alt="me"/>
            </div>
        </div>
        <Link to="/contact" style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black", fontWeight: "bold" }}>Contact Me</Link>
    </div>
    );
}
    
export default Hero;