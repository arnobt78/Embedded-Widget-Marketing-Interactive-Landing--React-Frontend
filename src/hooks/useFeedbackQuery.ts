/**
 * useFeedbackQuery Hook - Enhanced Feedback Query with Query Params Support
 * 
 * Enhanced version of useFeedback that supports:
 * - Query parameters for filtering/searching
 * - URL search params sync
 * - Optimized caching
 * - Error handling with toasts
 * 
 * Query Params Supported:
 * - search: Search term for filtering feedback
 * - sortBy: Column to sort by (name, email, date, rating)
 * - sortOrder: Sort order (asc, desc)
 */

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

/**
 * Feedback Item Interface
 */
export interface FeedbackItem {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  createdAt: string;
}

/**
 * API Endpoint Configuration
 */
const API_BASE_URL = "https://embedded-feedback.vercel.app/api/feedback";

/**
 * Fetch Feedback Function
 * 
 * Fetches all feedback entries from the API.
 * 
 * @returns {Promise<FeedbackItem[]>} Array of feedback objects
 * @throws {Error} If fetch fails
 */
async function fetchFeedbacks(): Promise<FeedbackItem[]> {
  const response = await fetch(API_BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    // Enable caching for performance
    cache: "default",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch feedbacks: ${response.statusText}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

/**
 * useFeedbackQuery Hook Return Type
 */
export interface UseFeedbackQueryReturn {
  data: FeedbackItem[];
  allData: FeedbackItem[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isFetching: boolean;
}

/**
 * useFeedbackQuery Hook
 * 
 * React Query hook with query params support for filtering and sorting.
 */
export function useFeedbackQuery(): UseFeedbackQueryReturn {
  const [searchParams] = useSearchParams();

  // Get query params (only search, sorting is handled by table)
  const searchTerm = searchParams.get("search") || "";

  // React Query hook with infinite cache
  const query = useQuery({
    queryKey: ["feedbacks"], // Cache key - used for invalidation
    queryFn: fetchFeedbacks, // Function to fetch data
    // staleTime and gcTime are set to Infinity in queryClient config
  });

  // Filter data based on search query param
  // Sorting is handled by TanStack Table to avoid duplication
  const filteredData = useMemo(() => {
    let data = query.data || [];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      data = data.filter((item) => {
        const name = (item.name || "").toLowerCase();
        const email = (item.email || "").toLowerCase();
        const message = (item.message || "").toLowerCase();
        return (
          name.includes(searchLower) ||
          email.includes(searchLower) ||
          message.includes(searchLower)
        );
      });
    }

    return data;
  }, [query.data, searchTerm]);

  return {
    data: filteredData,
    allData: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch as () => void,
    isFetching: query.isFetching,
  };
}

