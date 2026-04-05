import "./Deals.css";

function Deals() {
  return (
    <section id="deals" className="deals-section">
      <div className="deals-container">
        <h2>Deals</h2>

        <div className="deals-card">
          <p className="deals-main">
            only for bracelets, necklaces or rings: Buy 2 of the same item, get
            1 other item free!
          </p>

          <p className="deals-sub">
            For baskets, big keychains, and small keychains:
            <span> Buy 2, get 1 free!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Deals;
