import "./Navbar.css";

type NavbarProps = {
  totalItems: number;
};

function Navbar({ totalItems }: NavbarProps) {
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
          {/* <img src="public/images/bag-cart.png" className="bag-logo" /> */}
          <div className="cart-wrapper">
            <img src="public/images/bag-cart.png" className="bag-logo" />

            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
