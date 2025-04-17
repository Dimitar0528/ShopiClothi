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
import { ClerkProvider } from "@clerk/clerk-react";

const queryClient = new QueryClient();

// Import Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
       <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <ShoppingProvider>
            <App />
        </ShoppingProvider>
       </ClerkProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
