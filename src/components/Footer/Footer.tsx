import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="links">
      <div className="footer-container">
        <div className="footer-section">
          <h3>The Cousins Loom</h3>
          <p>
            Handmade rainbow loom jewelry + trinkets made with hard work and
            care
          </p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="https://rainbowloom.com/" target="_blank">
                Official Rainbow Loom Website
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Coming soon
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Coming soon
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:cbhuber@gmail.com">Email Us</a>
            </li>
            {/* Add more later if needed */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Cousins Loom</p>
        <p>Website Created By: Colin Huber</p>
      </div>
    </footer>
  );
}

export default Footer;
