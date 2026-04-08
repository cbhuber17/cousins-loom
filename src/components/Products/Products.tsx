import { useState } from "react";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";
import { products as initialProducts } from "../../data/products";
import type { Product } from "../../data/products";

function Products() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleAddToCart = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: 1 } : product,
      ),
    );
  };

  const handleIncreaseQuantity = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.min(product.quantity + 1, 9) }
          : product,
      ),
    );
  };

  const handleDecreaseQuantity = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
          : product,
      ),
    );
  };

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
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
