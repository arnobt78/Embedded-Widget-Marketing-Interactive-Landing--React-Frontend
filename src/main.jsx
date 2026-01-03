/**
 * Main Entry Point for the React Application
 * 
 * This file is the starting point of the application. It:
 * 1. Imports React and ReactDOM's createRoot API (React 18+)
 * 2. Imports the main App component
 * 3. Imports global CSS styles
 * 4. Renders the App component into the DOM
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot is the React 18+ way to render React apps
// It replaces the older ReactDOM.render() method
// getElementById('root') finds the div with id="root" in index.html
createRoot(document.getElementById('root')).render(
  // StrictMode is a development tool that helps identify potential problems
  // It doesn't render any visible UI, but enables additional checks and warnings
  <StrictMode>
    <App />
  </StrictMode>,
)
