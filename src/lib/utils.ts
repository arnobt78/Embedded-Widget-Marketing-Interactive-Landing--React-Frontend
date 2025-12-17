/**
 * Utility Functions
 * 
 * Common utility functions used throughout the application.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Class Name Utility Function (cn)
 * 
 * Combines clsx and tailwind-merge to create a powerful className utility.
 * 
 * Why both?
 * - clsx: Conditionally joins classNames together
 * - tailwind-merge: Intelligently merges Tailwind CSS classes, resolving conflicts
 *                   (e.g., "px-2 px-4" becomes "px-4" - last one wins)
 * 
 * @param {...(string | undefined | null | false | { [key: string]: boolean })} inputs - Class names (strings, objects, arrays, conditionals)
 * @returns {string} Merged and optimized className string
 * 
 * @example
 * cn("px-2", "px-4") // "px-4" (tailwind-merge removes px-2)
 * cn("bg-red-500", isActive && "bg-blue-500") // Conditional classes
 */
export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(clsx(inputs));
}

