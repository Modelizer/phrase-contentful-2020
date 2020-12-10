import { useState } from "react";
import Retroware from "./components/Retroware";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { createCmsClient } from "./services/cms";
import { CmsClientContext } from "./context/CmsClientContext";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const [cmsApi, setCmsApi] = useState("delivery");
  const [cmsClient, setCmsClient] = useState(
    createCmsClient("delivery"),
  );

  const setApi = (newEnv) => {
    if (newEnv === cmsApi) {
      return;
    }

    setCmsApi(newEnv);
    setCmsClient(createCmsClient(newEnv));
  };

  return (
    <CmsClientContext.Provider
      value={{ client: cmsClient, api: cmsApi, setApi }}
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
