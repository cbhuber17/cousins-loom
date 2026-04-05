import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Deals from "./components/Deals/Deals";

function App() {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "1.5rem",
          textAlign: "center",
          backgroundColor: "#9caefd",
        }}
      >
        <h1 className="gradient-title shimmer-title">The Cousins Loom</h1>
        <p>Handmade rainbow loom jewelry</p>

        <About />
        <Products />
        <Deals />
      </main>
    </>
  );
}

export default App;
