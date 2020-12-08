import Computers from "./components/Computers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <h2 className="title">Latest Retroware</h2>

          <Computers />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
