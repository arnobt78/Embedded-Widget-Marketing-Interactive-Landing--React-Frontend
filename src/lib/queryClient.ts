/**
 * React Query Client Configuration
 * 
 * Configures TanStack React Query with optimal caching and stale time settings.
 * Uses infinite cache until database changes, then refetches on first access.
 * 
 * Configuration:
 * - staleTime: Infinity - Data is considered fresh forever until invalidated
 * - gcTime: Infinity - Cached data is kept forever (renamed from cacheTime in React Query v5)
 * - refetchOnWindowFocus: false - Don't refetch on window focus (save bandwidth)
 * - refetchOnMount: false - Use cache on mount, don't refetch automatically
 * - refetchOnReconnect: false - Don't refetch on reconnect
 * 
 * Invalidation Strategy:
 * - When DB is modified (via mutations), invalidate queries
 * - First access after invalidation triggers refetch
 * - Subsequent accesses use cache until next invalidation
 */

import { QueryClient } from "@tanstack/react-query";

/**
 * Query Client Instance
 * 
 * Configured for optimal caching behavior:
 * - Data stays fresh forever (staleTime: Infinity)
 * - Cache persists forever (gcTime: Infinity, renamed from cacheTime in v5)
 * - Manual invalidation triggers refetch only when needed
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Data never becomes stale
      gcTime: Infinity, // Cache forever (renamed from cacheTime in v5)
      refetchOnWindowFocus: false, // Don't refetch on focus
      refetchOnMount: false, // Use cache on mount
      refetchOnReconnect: false, // Don't refetch on reconnect
      retry: 1, // Retry once on failure
      retryDelay: 1000, // Wait 1s before retry
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});

