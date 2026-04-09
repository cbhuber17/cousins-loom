import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Deals from "./components/Deals/Deals";
import Footer from "./components/Footer/Footer";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { products as initialProducts } from "./data/products";
import type { Product } from "./data/products";

function HomePage({
  products,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: {
  products: Product[];
  onAddToCart: (productId: number) => void;
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
}) {
  return (
    <>
      <main
        style={{
          textAlign: "center",
          backgroundColor: "#9caefd",
        }}
      >
        <h1 className="gradient-title shimmer-title" id="home">
          The Cousins Loom
        </h1>
        <p>Handmade rainbow loom jewelry</p>

        <About />
        <Products
          products={products}
          onAddToCart={onAddToCart}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />
        <Deals />
        <Footer />
      </main>
    </>
  );
}

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const cartItemCount = useMemo(
    () => products.reduce((sum, product) => sum + product.quantity, 0),
    [products],
  );

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
    <>
      <Navbar cartItemCount={cartItemCount} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              onAddToCart={handleAddToCart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage products={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
