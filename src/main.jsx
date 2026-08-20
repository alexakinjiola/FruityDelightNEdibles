import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// HashRouter is used (routes look like /#/menu) so the site works correctly
// both as a plain double-clicked HTML file and on any static host — no
// server-side rewrite rules required for client-side routing to work.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
