import '../styles/Header.css';

// nav bar and seciton above
function Header() {
  return (
    <div className="Header">
      <div className="headerLinks">
          <h2 style={{ display: "inline-block", marginRight: "100px", color: "white", height: "200px"}}>Ronni Hartlage</h2>
          <a href="/" style={{ margin: "10px" }}>Home </a>
          <a href="/about" style={{ margin: "10px" }}>About </a>
          <a href="/projects" style={{ margin: "10px" }}>Projects </a>
          <a href="/contact" style={{ margin: "10px" }}>Contact </a>
      </div>
      <h1 style={{ position: "absolute", width: "100%", top: "100px", color: "white" }}>Welcome to the Website of Ronni Hartlage!</h1>
      <h2 style={{ position: "absolute", width: "100%", top: "150px", color: "white" }}>This site is a work in progress, but will eventually be a portfolio for Ronni Hartlage.</h2>
      <a href="/contact" style={{ color: "white", padding: "10px", borderRadius: "8px", backgroundColor: "black" }}>Contact Ronni</a>
    </div>
  );
}

export default Header;