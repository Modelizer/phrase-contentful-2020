import Retroware from "./components/Retroware";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <h2 className="title">Latest Retroware</h2>

          <Retroware />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
