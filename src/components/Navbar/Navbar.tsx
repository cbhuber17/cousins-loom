import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

type NavbarProps = {
  cartItemCount: number;
};

function Navbar({ cartItemCount }: NavbarProps) {
  return (
    <header className="top-nav">
      <div className="nav-container">
        <HashLink smooth to="/#home" className="nav-logo">
          The Cousins Loom
        </HashLink>
        {/* <div className="vl" /> */}

        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            <HashLink smooth to="/#home">
              Home
            </HashLink>
            <HashLink smooth to="/#about">
              About Us
            </HashLink>
            <HashLink smooth to="/#products">
              Products
            </HashLink>
            <HashLink smooth to="/#links">
              Links
            </HashLink>
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
