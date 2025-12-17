/**
 * useFeedback Hook - TanStack React Query Hook for Feedback Data
 * 
 * Centralized hook for fetching and managing feedback data using React Query.
 * Implements caching strategy: infinite cache until DB changes, then refetch.
 * 
 * Features:
 * - Automatic caching with infinite stale time
 * - Manual invalidation when data changes
 * - Loading and error states
 * - TypeScript-ready return types
 * 
 * Query Key: ['feedbacks'] - Used for cache invalidation
 * Query Function: Fetches from API endpoint
 * 
 * Usage:
 * const { data: feedbacks, isLoading, error, refetch } = useFeedback();
 */

import { useQuery, QueryClient } from "@tanstack/react-query";
import { FeedbackItem } from "./useFeedbackQuery";

/**
 * API Endpoint Configuration
 */
const API_BASE_URL = "https://embedded-feedback.vercel.app/api/feedback";

/**
 * Fetch Feedback Function
 * 
 * Fetches all feedback entries from the API.
 * Used as the query function for React Query.
 * 
 * @returns {Promise<FeedbackItem[]>} Array of feedback objects
 * @throws {Error} If fetch fails
 */
async function fetchFeedbacks(): Promise<FeedbackItem[]> {
  const response = await fetch(API_BASE_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch feedbacks: ${response.statusText}`);
  }
  
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

/**
 * useFeedback Hook Return Type
 */
export interface UseFeedbackReturn {
  data: FeedbackItem[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isFetching: boolean;
}

/**
 * useFeedback Hook
 * 
 * React Query hook for fetching feedback data with automatic caching.
 */
export function useFeedback(): UseFeedbackReturn {
  const query = useQuery<FeedbackItem[], Error>({
    queryKey: ["feedbacks"], // Cache key - used for invalidation
    queryFn: fetchFeedbacks, // Function to fetch data
    // staleTime and gcTime are set to Infinity in queryClient config
  });

  return {
    data: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch as () => void,
    isFetching: query.isFetching,
  };
}

/**
 * Invalidate Feedback Query
 * 
 * Utility function to invalidate feedback cache.
 * Call this after mutations to trigger refetch on next access.
 * 
 * Usage in mutations:
 * await mutation();
 * invalidateFeedbackQuery(queryClient);
 */
export function invalidateFeedbackQuery(queryClient: QueryClient): void {
  queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
}

