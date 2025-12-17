/**
 * Main Entry Point - React Application Bootstrap
 * 
 * This is the entry point of the React application. It:
 * - Imports the root App component
 * - Imports global CSS styles
 * - Renders the React app into the DOM
 * 
 * React 18's createRoot API:
 * - Provides better concurrent rendering capabilities
 * - Replaces the older ReactDOM.render() method
 * - Enables automatic batching and other performance improvements
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a root and render the app
// StrictMode helps identify potential problems in development
// It renders components twice in development to detect side effects
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
