/**
 * FeedbackDashboard Component - Admin Dashboard for Viewing User Feedback
 * 
 * This component displays all user feedback submissions in a table format.
 * It fetches data from the embedded feedback widget's API endpoint.
 * 
 * Key Features:
 * - Fetches feedback data from external API on component mount
 * - Displays feedback in a table (name, email, message, date)
 * - Loading and error states
 * - Global refresh function for widget integration
 * 
 * API Integration:
 * - Uses Fetch API to GET feedback from Next.js API route
 * - Endpoint: https://embedded-feedback.vercel.app/api/feedback
 * - Handles errors gracefully with user-friendly messages
 * 
 * Widget Integration:
 * - Exposes refreshFeedbackDashboard function on window object
 * - Widget can call this to refresh dashboard after new feedback submission
 * - Enables real-time updates when feedback is submitted
 * 
 * State Management:
 * - feedbacks: Array of feedback objects from API
 * - loading: Boolean flag for loading state
 * - error: String for error messages
 */

import { useEffect, useState } from "react";
import { FeedbackItem } from "../../hooks/useFeedbackQuery";

/**
 * Window interface extension for refreshFeedbackDashboard
 */
declare global {
  interface Window {
    refreshFeedbackDashboard?: () => void;
  }
}

/**
 * FeedbackDashboard Component - Admin Dashboard for Viewing User Feedback
 */
export default function FeedbackDashboard(): JSX.Element {
  // State for storing fetched feedback data
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  
  // Loading state to show loading indicator
  const [loading, setLoading] = useState<boolean>(true);
  
  // Error state for displaying error messages
  const [error, setError] = useState<string>("");

  /**
   * useEffect Hook - Fetch feedback on component mount
   * 
   * Runs once when component mounts (empty dependency array []).
   * Fetches feedback from API and handles loading/error states.
   */
  useEffect(() => {
    /**
     * Async function to fetch feedback from API
     * 
     * Process:
     * 1. Set loading to true
     * 2. Clear any previous errors
     * 3. Make GET request to API endpoint
     * 4. Parse JSON response
     * 5. Update state with feedback data
     * 6. Handle errors appropriately
     * 7. Always set loading to false (in finally block)
     */
    async function fetchFeedbacks(): Promise<void> {
      setLoading(true);    // Show loading indicator
      setError("");        // Clear previous errors
      
      try {
        // Fetch feedback from deployed Next.js API endpoint
        const res = await fetch(
          "https://embedded-feedback.vercel.app/api/feedback"
        );
        
        // Check if response is successful (status 200-299)
        if (!res.ok) throw new Error("Failed to fetch feedbacks");
        
        // Parse JSON response to JavaScript object
        const data = await res.json() as FeedbackItem[];
        
        // Update state with fetched feedback array
        setFeedbacks(Array.isArray(data) ? data : []);
      } catch (err) {
        // Handle errors (network errors, API errors, etc.)
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        // Always hide loading indicator (runs whether success or error)
        setLoading(false);
      }
    }
    
    // Call fetch function immediately when component mounts
    fetchFeedbacks();
    
    /**
     * Expose refresh function globally for widget integration
     * 
     * The feedback widget can call window.refreshFeedbackDashboard()
     * to refresh the dashboard after a new feedback submission.
     * This enables real-time updates without page reload.
     */
    window.refreshFeedbackDashboard = fetchFeedbacks;
  }, []); // Empty array means this effect runs only once on mount

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Feedback Dashboard</h2>
      
      {/* Loading state - show loading message */}
      {loading && <p>Loading...</p>}
      
      {/* Error state - show error message in red */}
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Feedback table - overflow-x-auto allows horizontal scrolling on small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Message</th>
              <th className="border px-2 py-1">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through feedbacks array to render each feedback as a table row */}
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                {/* Use || operator to show "-" if value is null/undefined */}
                <td className="border px-2 py-1">{fb.name || "-"}</td>
                <td className="border px-2 py-1">{fb.email || "-"}</td>
                <td className="border px-2 py-1">{fb.message}</td>
                {/* Format date using JavaScript Date object and toLocaleString() */}
                <td className="border px-2 py-1">
                  {new Date(fb.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
