import "./Navbar.css";

function Navbar() {
  return (
    <header className="top-nav">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          The Cousins Loom
        </a>
        <div className="vl" />

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#deals">Deals</a>
          <a href="#links">Links</a>
          <img src="public/images/bag-cart.png" className="bag-logo" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
