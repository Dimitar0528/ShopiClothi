import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router";
import { ShoppingProvider } from "./contexts/ShoppingContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </Router>
  </StrictMode>
);
