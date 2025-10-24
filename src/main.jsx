import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ress.css";
import "./index.css";
import App from "./App.jsx";
import Logo from "./components/Logo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
