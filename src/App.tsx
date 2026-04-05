import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1.5rem", textAlign: "center" }}>
        <h1 className="gradient-title shimmer-title">The Cousins Loom</h1>
        <p>Handmade rainbow loom jewelry</p>
      </main>
    </>
  );
}

export default App;
