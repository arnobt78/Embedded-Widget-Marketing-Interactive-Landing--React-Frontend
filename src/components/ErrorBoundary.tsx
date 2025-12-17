/**
 * Error Boundary Component - Catches React Errors
 * 
 * React Error Boundary component that catches JavaScript errors anywhere
 * in the child component tree, logs them, and displays a fallback UI.
 * 
 * Features:
 * - Catches errors in component tree
 * - Displays user-friendly error message
 * - Logs errors for debugging
 * - Prevents entire app crash
 * 
 * Usage:
 * Wrap components with <ErrorBoundary> to catch errors
 */

import { Component, ReactNode, ErrorInfo } from "react";

/**
 * Error Boundary State Interface
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo?: ErrorInfo;
}

/**
 * Error Boundary Props Interface
 */
interface ErrorBoundaryProps {
  children: ReactNode;
}

/**
 * Error Boundary Class Component
 * Must be a class component (React requirement for error boundaries)
 */
class ErrorBoundaryClass extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Dev Only)
                </summary>
                <pre className="mt-2 text-xs text-red-600 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Error Boundary Wrapper Component
 * Wraps ErrorBoundaryClass for easier usage
 */
export default function ErrorBoundary({ children }: ErrorBoundaryProps): JSX.Element {
  return <ErrorBoundaryClass>{children}</ErrorBoundaryClass>;
}

