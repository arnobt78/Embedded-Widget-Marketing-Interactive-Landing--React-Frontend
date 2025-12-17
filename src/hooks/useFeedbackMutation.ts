/**
 * useFeedbackMutation Hook - Feedback Mutation Operations
 * 
 * Provides mutation hooks for feedback operations (create, update, delete).
 * Uses TanStack React Query mutations with automatic cache invalidation.
 * 
 * Features:
 * - Create feedback mutation
 * - Update feedback mutation
 * - Delete feedback mutation
 * - Automatic cache invalidation after mutations
 * - Toast notifications for success/error
 * 
 * Note: Currently these mutations are for future use.
 * The widget handles submission directly, but these can be used
 * for admin operations like editing or deleting feedback.
 */

import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import { useToast } from "../contexts/ToastContext";
import { FeedbackItem } from "./useFeedbackQuery";

/**
 * API Endpoint Configuration
 */
const API_BASE_URL = "https://embedded-feedback.vercel.app/api/feedback";

/**
 * Create Feedback Input Interface
 */
export interface CreateFeedbackInput {
  name: string;
  email: string;
  message: string;
  rating: number;
}

/**
 * useCreateFeedback Mutation Hook
 * 
 * Mutation hook for creating new feedback entries.
 * 
 * @example
 * const { mutate: createFeedback, isPending } = useCreateFeedback();
 * createFeedback({ name: "John", email: "john@example.com", message: "Great!", rating: 5 });
 */
export function useCreateFeedback(): UseMutationResult<FeedbackItem, Error, CreateFeedbackInput> {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateFeedbackInput): Promise<FeedbackItem> => {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to create feedback: ${response.statusText}`);
      }

      return response.json() as Promise<FeedbackItem>;
    },
    onSuccess: () => {
      // Invalidate feedbacks query to refetch after creation
      queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
      addToast("Feedback created successfully!", "success");
    },
    onError: (error) => {
      addToast(`Error creating feedback: ${error.message}`, "error");
    },
  });
}

/**
 * useDeleteFeedback Mutation Hook
 * 
 * Mutation hook for deleting feedback entries.
 * 
 * @example
 * const { mutate: deleteFeedback } = useDeleteFeedback();
 * deleteFeedback("feedback-id-123");
 */
export function useDeleteFeedback(): UseMutationResult<string, Error, string> {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: async (id: string): Promise<string> => {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete feedback: ${response.statusText}`);
      }

      return id;
    },
    onSuccess: () => {
      // Invalidate feedbacks query to refetch after deletion
      queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
      addToast("Feedback deleted successfully!", "success");
    },
    onError: (error) => {
      addToast(`Error deleting feedback: ${error.message}`, "error");
    },
  });
}

