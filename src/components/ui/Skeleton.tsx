/**
 * Skeleton Component - Loading Placeholder
 * 
 * Reusable skeleton component for displaying loading states.
 * Maintains exact dimensions matching the actual content for smooth transitions.
 * 
 * Features:
 * - Animated pulse effect
 * - Customizable dimensions
 * - Matches exact size of content it replaces
 */

import { cn } from "../../lib/utils";
import { HTMLAttributes } from "react";

/**
 * Skeleton Component Props
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Skeleton Component
 * 
 * Displays an animated loading placeholder that matches the dimensions
 * of the content it will replace.
 */
function Skeleton({ className, ...props }: SkeletonProps): JSX.Element {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-800",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

