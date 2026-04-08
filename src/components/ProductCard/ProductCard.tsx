import "./ProductCard.css";
import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (productId: number) => void;
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
};

function ProductCard({
  product,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: ProductCardProps) {
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

        {product.quantity === 0 ? (
          <button
            type="button"
            className="product-card-button"
            onClick={() => onAddToCart(product.id)}
          >
            Add to cart
          </button>
        ) : (
          <div className="product-card-quantity-controls">
            <button
              type="button"
              className="quantity-button"
              onClick={() => onDecreaseQuantity(product.id)}
              aria-label={`Decrease quantity for ${product.name}`}
            >
              -
            </button>

            <span className="quantity-value">{product.quantity}</span>

            <button
              type="button"
              className="quantity-button"
              onClick={() => onIncreaseQuantity(product.id)}
              aria-label={`Increase quantity for ${product.name}`}
              disabled={product.quantity >= 9}
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
