import "./ProductCard.css";
import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>

        {product.price && <p className="product-card-price">{product.price}</p>}

        <a href="#links" className="product-card-button">
          Add to Cart
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
