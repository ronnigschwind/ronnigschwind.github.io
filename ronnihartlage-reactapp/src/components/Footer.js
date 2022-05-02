import '../styles/Footer.css';
import { Link} from 'react-router-dom';

// nav bar and seciton above
function Footer() {
  return (
    <div className="Footer">
      <div className="footerLinks">
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/projects" style={{ margin: "10px" }}>Projects</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
          <p style={{ marginTop: "35px" }}>Designed and Developed by Ronni Hartlage</p>
          <p>Last updated May 2022</p>
      </div>
    </div>
  );
}

export default Footer;