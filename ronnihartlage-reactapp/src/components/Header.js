import '../styles/Header.css';

// nav bar and seciton above
function Header() {
  return (
    <div className="Header">
      <div className="headerLinks">
          <a href="/" style={{ margin: "10px" }}>Home </a>
          <a href="/" style={{ margin: "10px" }}>Projects </a>
          <a href="/" style={{ margin: "10px" }}>Other Interests </a>
          <a href="/" style={{ margin: "10px" }}> </a>
      </div>
    </div>
  );
}

export default Header;