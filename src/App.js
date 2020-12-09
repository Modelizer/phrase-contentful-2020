import { useState } from "react";
import Retroware from "./components/Retroware";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { createClient } from "./cms/client";
import { ClientContext } from "./context/ClientContext";

function App() {
  const [cmsEnv, setCmsEnv] = useState("delivery");
  const [cmsClient, setCmsClient] = useState(
    createClient("delivery"),
  );

  const setEnv = (newEnv) => {
    if (newEnv === cmsEnv) {
      return;
    }

    setCmsEnv(newEnv);
    setCmsClient(createClient(newEnv));
  };

  return (
    <ClientContext.Provider
      value={{ client: cmsClient, env: cmsEnv, setEnv }}
    >
      <Navbar />

      <section className="section">
        <div className="container">
          <h2 className="title">Latest Retroware</h2>

          <Retroware />
        </div>
      </section>

      <Footer />
    </ClientContext.Provider>
  );
}

export default App;
