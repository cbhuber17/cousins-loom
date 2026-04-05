import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";

function Products() {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2 style={{ fontSize: "4rem" }}>Products</h2>
          <p style={{ fontSize: "1.5rem" }}>
            Take a look at some of our handmade rainbow loom jewelry creations.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
