import { createRoot } from "react-dom/client";
import App from "./App";
import ColorState from "./context/colorState";
import NavState from "./context/navState";
import PreLoader from "./layouts/PreLoader";
import "../styles/globals.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <NavState>
    <ColorState>
      <App />
      <PreLoader />
    </ColorState>
  </NavState>
);
