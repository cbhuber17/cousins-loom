import "./Navbar.css";

function Navbar() {
  return (
    <header className="top-nav">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          The Cousins Loom
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#links">Links</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
