import { useState } from "react";
import Retroware from "./components/Retroware";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { createCmsClient } from "./services/cms";
import { CmsClientContext } from "./context/CmsClientContext";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const [cmsEnv, setCmsEnv] = useState("delivery");
  const [cmsClient, setCmsClient] = useState(
    createCmsClient("delivery"),
  );

  const setEnv = (newEnv) => {
    if (newEnv === cmsEnv) {
      return;
    }

    setCmsEnv(newEnv);
    setCmsClient(createCmsClient(newEnv));
  };

  return (
    <CmsClientContext.Provider
      value={{ client: cmsClient, env: cmsEnv, setEnv }}
    >
      <Navbar />

      <section className="section">
        <div className="container">
          <h2 className="title">{t("latest_retroware")}</h2>

          <Retroware />
        </div>
      </section>

      <Footer />
    </CmsClientContext.Provider>
  );
}

export default App;
