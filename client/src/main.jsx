import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScroll from "./animations/SmoothScroll";

// Force scroll to top on load/reload
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
