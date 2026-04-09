import { Link } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  cartItemCount: number;
};

function Navbar({ cartItemCount }: NavbarProps) {
  return (
    <header className="top-nav">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          The Cousins Loom
        </a>
        <div className="vl" />

        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#links">Links</a>
          </nav>

          {cartItemCount > 0 ? (
            <Link to="/checkout" aria-label="Go to checkout">
              <div className="cart-wrapper">
                <img src="public/images/bag-cart.png" className="bag-logo" />

                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </div>
            </Link>
          ) : (
            <div className="cart-wrapper">
              <img src="public/images/bag-cart.png" className="bag-logo" />

              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
