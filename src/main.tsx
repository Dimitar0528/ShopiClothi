import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router";
import { ShoppingProvider } from "./contexts/ShoppingContext.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
