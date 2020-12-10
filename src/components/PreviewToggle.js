import { useContext } from "react";
import { CmsClientContext } from "../context/CmsClientContext";

const PreviewToggle = () =>
  process.env.NODE_ENV === "production" ? null : (
    <ToggleButton />
  );

const ToggleButton = () => {
  const { api, setApi } = useContext(CmsClientContext);

  const toggleClientEnv = () =>
    setApi(api === "delivery" ? "preview" : "delivery");

  return (
    <div className="field">
      <p className="control">
        <button
          className={`button ${
            api === "preview" ? "is-warning" : "is-white"
          }`}
          style={{ width: "7.4rem" }}
          onClick={toggleClientEnv}
        >
          Preview {api === "preview" ? "On" : "Off"}
        </button>
      </p>
    </div>
  );
};

export default PreviewToggle;
