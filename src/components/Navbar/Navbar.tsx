import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

type NavbarProps = {
  cartItemCount: number;
};

function Navbar({ cartItemCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 775) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <button
              className="hamburger-button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>

            <HashLink
              smooth
              to="/#home"
              className="nav-logo"
              onClick={closeMenu}
            >
              The Cousins Loom
            </HashLink>
          </div>

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

                  <span className="cart-badge">{cartItemCount}</span>
                </div>
              </Link>
            ) : (
              <div className="cart-wrapper">
                <img src="public/images/bag-cart.png" className="bag-logo" />
              </div>
            )}
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu"
        className={`mobile-menu-slate ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-header">
          <button
            className="mobile-menu-close"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            type="button"
          >
            ×
          </button>
        </div>

        <nav className="mobile-menu-links" aria-label="Mobile Primary">
          <HashLink smooth to="/#home" onClick={closeMenu}>
            Home
          </HashLink>
          <HashLink smooth to="/#about" onClick={closeMenu}>
            About Us
          </HashLink>
          <HashLink smooth to="/#products" onClick={closeMenu}>
            Products
          </HashLink>
          <HashLink smooth to="/#links" onClick={closeMenu}>
            Links
          </HashLink>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
