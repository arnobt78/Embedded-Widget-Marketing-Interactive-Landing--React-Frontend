/**
 * Main Entry Point - React Application Bootstrap
 *
 * This is the entry point of the React application. It:
 * - Imports the root App component
 * - Imports global CSS styles
 * - Sets up React Query Provider for data fetching
 * - Sets up React Router for navigation
 * - Sets up Toast Provider for notifications
 * - Renders the React app into the DOM
 *
 * React 18's createRoot API:
 * - Provides better concurrent rendering capabilities
 * - Replaces the older ReactDOM.render() method
 * - Enables automatic batching and other performance improvements
 *
 * Providers:
 * - QueryClientProvider: Enables TanStack React Query for data fetching and caching
 * - BrowserRouter: Enables client-side routing with React Router
 * - ToastProvider: Provides global toast notification system
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { queryClient } from "./lib/queryClient";
import { ToastProvider } from "./contexts/ToastContext";
import "./index.css";

// Create a root and render the app
// StrictMode helps identify potential problems in development
// It renders components twice in development to detect side effects
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastProvider>
          <App />
        </ToastProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
