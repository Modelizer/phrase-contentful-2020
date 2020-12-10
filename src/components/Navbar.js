import { useTranslation } from "react-i18next";
import logo from "../logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import PreviewToggle from "./PreviewToggle";

function Navbar({ setClientEnv }) {
  const { t } = useTranslation();

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={logo}
            width="40"
            height="28"
            alt="Logo"
          />
          <span className="has-text-weight-bold">
            RBrite
          </span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            {t("retroware")}
          </a>

          <a className="navbar-item" href="/cart">
            {t("cart")}
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <PreviewToggle />
          </div>

          <div className="navbar-item">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
