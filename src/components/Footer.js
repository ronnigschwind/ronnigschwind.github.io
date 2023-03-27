import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <div className="footerLinks">
          <Link to="#projects" style={{ margin: "10px" }}>Projects</Link>
          <Link to="#work-experience" style={{ margin: "10px" }}>Work Experience</Link>
          <Link to="#contact" style={{ margin: "10px" }}>Contact</Link>
          <p style={{ marginTop: "35px" }}>Designed and Developed by Ronni Gschwind</p>
          <p>© Copyright {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;