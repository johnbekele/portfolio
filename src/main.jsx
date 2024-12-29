import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
