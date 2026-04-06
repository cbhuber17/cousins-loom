import "./Deals.css";

function isAprilFourth(date = new Date()) {
  return date.getMonth() === 3 && date.getDate() === 4;
}

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
            <span>
              For baskets, big keychains, and small keychains: Buy 2, get 1
              free!
            </span>
          </p>
          {isAprilFourth() && (
            <p className="deals-sub">
              birthday reward!
              <span> for every 2 bracelets you buy, get two free!</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Deals;
