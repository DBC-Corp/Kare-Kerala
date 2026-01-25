import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScroll from "./animations/SmoothScroll";
import "./utils/scrollReset";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
