import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Deals from "./components/Deals/Deals";
import Footer from "./components/Footer/Footer";
import { products as initialProducts } from "./data/products";
import type { Product } from "./data/products";

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // 🔢 Calculate total items in cart
  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar totalItems={totalItems} />
      <main
        style={{
          // padding: "1.5rem",
          textAlign: "center",
          backgroundColor: "#9caefd",
        }}
      >
        <h1 className="gradient-title shimmer-title" id="home">
          The Cousins Loom
        </h1>
        <p>Handmade rainbow loom jewelry</p>

        <About />
        <Products products={products} setProducts={setProducts} />
        <Deals />
        <Footer />
      </main>
    </>
  );
}

export default App;
