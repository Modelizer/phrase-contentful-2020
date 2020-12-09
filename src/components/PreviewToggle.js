import { useContext } from "react";
import { CmsClientContext } from "../context/CmsClientContext";

const PreviewToggle = () =>
  process.env.NODE_ENV === "production" ? null : (
    <ToggleButton />
  );

const ToggleButton = () => {
  const { env, setEnv } = useContext(CmsClientContext);

  const toggleClientEnv = () =>
    setEnv(env === "delivery" ? "preview" : "delivery");

  return (
    <div className="field">
      <p className="control">
        <button
          className={`button ${
            env === "preview" ? "is-warning" : "is-white"
          }`}
          style={{ width: "7.4rem" }}
          onClick={toggleClientEnv}
        >
          Preview {env === "preview" ? "On" : "Off"}
        </button>
      </p>
    </div>
  );
};

export default PreviewToggle;
