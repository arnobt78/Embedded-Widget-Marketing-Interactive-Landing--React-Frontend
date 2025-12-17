/**
 * App Component - Root Component with Routing
 * 
 * This is the main root component that sets up routing and layout structure.
 * Uses React Router for navigation between pages.
 * 
 * Routes:
 * - / - Home page (landing page with all marketing sections)
 * - /dashboard - Feedback dashboard page
 * 
 * Layout Structure:
 * - Navbar: Always visible navigation header
 * - Routes: Page content based on current route
 * 
 * Layout Notes:
 * - overflow-x-hidden prevents horizontal scrolling on mobile
 * - Navbar is persistent across all routes
 */

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";

/**
 * App Component - Root Component with Routing and Error Handling
 * 
 * Wrapped with ErrorBoundary to catch and handle React errors gracefully.
 */
const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <main className="overflow-x-hidden">
        {/* Navigation bar - fixed at top, contains logo and menu */}
        {/* Persistent across all routes */}
        <Navbar />
        
        {/* Route definitions */}
        <Routes>
          {/* Home route - Landing page */}
          <Route path="/" element={<Home />} />
          
          {/* Dashboard route - Feedback dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </ErrorBoundary>
  );
};

export default App;
