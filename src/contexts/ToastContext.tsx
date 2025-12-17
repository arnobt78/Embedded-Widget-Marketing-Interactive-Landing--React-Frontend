/**
 * Toast Context - Centralized Toast Notification System
 * 
 * Provides a global toast notification system using React Context.
 * This allows any component to show toast notifications without prop drilling.
 * 
 * Features:
 * - Centralized state management
 * - Auto-dismiss after duration
 * - Multiple toast variants (success, error, info, warning)
 * - Smooth animations
 * - Positioned at bottom-right
 * 
 * Usage:
 * Wrap your app with <ToastProvider>
 * Use useToast() hook in any component to show toasts
 */

import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

/**
 * Toast Variant Type
 */
export type ToastVariant = "success" | "error" | "info" | "warning";

/**
 * Toast Item Interface
 */
export interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
  duration: number;
}

/**
 * Toast Context Value Interface
 */
interface ToastContextValue {
  addToast: (message: string, variant?: ToastVariant, duration?: number) => void;
  removeToast: (id: number) => void;
}

/**
 * Toast Context - Provides toast functions and state
 */
const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * Toast Variant Styles
 */
const toastVariants: Record<ToastVariant, string> = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
  warning: "bg-yellow-500 text-white",
};

/**
 * Toast Component Props Interface
 */
interface ToastItemProps {
  toast: ToastItem;
  onDismiss: (id: number) => void;
}

/**
 * Toast Component - Individual Toast Item
 */
function ToastItem({ toast, onDismiss }: ToastItemProps): JSX.Element {
  const { id, message, variant = "info", duration = 3000 } = toast;

  // Auto-dismiss after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 100, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        "px-4 py-3 rounded-lg shadow-xl mb-2 flex items-center justify-between min-w-[300px] max-w-[400px] backdrop-blur-sm border border-white/20",
        toastVariants[variant]
      )}
    >
      <span className="text-sm font-medium">{message}</span>
      <motion.button
        onClick={() => onDismiss(id)}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="ml-4 text-white hover:text-gray-200 transition-colors text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20"
        aria-label="Close toast"
      >
        ×
      </motion.button>
    </motion.div>
  );
}

/**
 * Toast Container Props Interface
 */
interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: number) => void;
}

/**
 * Toast Container Component
 * Renders all active toasts
 */
function ToastContainer({ toasts, onDismiss }: ToastContainerProps): JSX.Element | null {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} onDismiss={onDismiss} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/**
 * Toast Provider Props Interface
 */
interface ToastProviderProps {
  children: ReactNode;
}

/**
 * Toast Provider Component
 * Provides toast context to children
 */
export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastIdCounter = useRef<number>(0);

  /**
   * Add a new toast notification
   */
  const addToast = useCallback((message: string, variant: ToastVariant = "info", duration: number = 3000): void => {
    const id = ++toastIdCounter.current;
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
  }, []);

  /**
   * Remove a toast by ID
   */
  const removeToast = useCallback((id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  );
}

/**
 * useToast Hook
 * Hook to access toast functions from any component
 * 
 * @returns {ToastContextValue} Toast functions
 * @throws {Error} If used outside ToastProvider
 * 
 * @example
 * const { addToast } = useToast();
 * addToast("Success!", "success");
 */
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

