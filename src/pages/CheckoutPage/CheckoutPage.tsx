import { useMemo, useState } from "react";
import "./CheckoutPage.css";
import type { Product } from "../../data/products";

type CheckoutPageProps = {
  products: Product[];
};

function CheckoutPage({ products }: CheckoutPageProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const selectedProducts = useMemo(
    () => products.filter((product) => product.quantity > 0),
    [products]
  );

  const totalAmount = useMemo(
    () =>
      selectedProducts.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ),
    [selectedProducts]
  );

  const handleCopyToClipboard = async () => {
    const lines = [
      "The Cousins Loom Order",
      "",
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Email: ${email}`,
      "",
      "Items:",
      ...selectedProducts.map(
        (product) =>
          `- ${product.name}: $${product.price.toFixed(2)} x ${product.quantity} = $${(
            product.price * product.quantity
          ).toFixed(2)}`
      ),
      "",
      `Total: $${totalAmount.toFixed(2)}`,
    ];

    const textToCopy = lines.join("\n");

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyMessage("Copied to clipboard!");
    } catch {
      setCopyMessage("Could not copy automatically. Please try again.");
    }
  };

  return (
    <main className="checkout-page" style={{ backgroundColor: "#9caefd" }}>
      <section className="checkout-container">
        <div className="checkout-image-column">
          <div className="checkout-image-placeholder">
            <img
              src="public/images/mega-combo-set.jpg"
              alt="Rainbow loom checkout"
              className="checkout-image"
            />
          </div>
        </div>

        <div className="checkout-details-column">
          <h1>Checkout</h1>

          <div className="checkout-card">
            <h2>Your Order</h2>

            {selectedProducts.length === 0 ? (
              <p>No items selected yet.</p>
            ) : (
              <>
                <ul className="checkout-item-list">
                  {selectedProducts.map((product) => (
                    <li key={product.id} className="checkout-item">
                      <div>
                        <p className="checkout-item-title">{product.name}</p>
                        <p className="checkout-item-meta">
                          ${product.price.toFixed(2)} × {product.quantity}
                        </p>
                      </div>

                      <p className="checkout-item-total">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="checkout-total-row">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>

          <div className="checkout-card">
            <h2>Your Details</h2>

            <form
              className="checkout-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label>
                First Name
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label>
                Last Name
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <button
                type="button"
                className="copy-button"
                onClick={handleCopyToClipboard}
                disabled={selectedProducts.length === 0}
              >
                Copy Order Details
              </button>

              {copyMessage && <p className="copy-message">{copyMessage}</p>}
            </form>
          </div>
        </div>
      </section>
      <div
        className="checkout-card"
        style={{ marginLeft: "10rem", marginRight: "10rem" }}
      >
        <h2>How to Order</h2>
        <p>
          Click the button above to copy your cart details, then paste them into
          an email and send it to:
        </p>
        <p className="checkout-email">cbhuber@gmail.com</p>
        <p>We’ll work out pickup, delivery, or shipping details by email.</p>
      </div>
    </main>
  );
}

export default CheckoutPage;
