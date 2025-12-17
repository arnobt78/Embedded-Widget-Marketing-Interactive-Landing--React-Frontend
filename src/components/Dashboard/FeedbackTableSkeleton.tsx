/**
 * FeedbackTableSkeleton Component - Precise Loading Skeletons
 * 
 * Loading skeleton component that matches the exact dimensions
 * of the FeedbackTable component for smooth transitions.
 * 
 * Features:
 * - Matches exact table structure and dimensions
 * - Same layout as actual table
 * - Smooth loading experience
 * - Animated pulse effect with staggered animations
 */

import { motion } from "framer-motion";
import { Skeleton } from "../ui/Skeleton";

/**
 * FeedbackTableSkeleton Component
 * 
 * Provides skeleton loading state matching exact table dimensions
 * with enhanced animations for better UX
 */
export default function FeedbackTableSkeleton(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6 max-w-7xl mx-auto space-y-6"
    >
      {/* Header Skeleton - Matches exact header dimensions */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Skeleton className="h-32 w-full rounded-xl" />
      </motion.div>

      {/* Table Container Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
      >
        {/* Table Header Skeleton - Exact match to table header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b-2 border-gray-200 px-6 py-4">
          <div className="flex gap-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                <Skeleton className="h-6 w-24" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Table Rows Skeleton - Exact match to table row dimensions */}
        <div className="divide-y divide-gray-100">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.03, duration: 0.3 }}
              className="px-6 py-4"
            >
              <div className="flex gap-6 items-center">
                {/* Name cell skeleton - exact width */}
                <Skeleton className="h-5 w-32" />
                {/* Email cell skeleton - exact width with badge-like height */}
                <Skeleton className="h-6 w-40 rounded-full" />
                {/* Message cell skeleton - exact width */}
                <Skeleton className="h-5 w-48" />
                {/* Rating cell skeleton - exact width for stars */}
                <Skeleton className="h-5 w-28" />
                {/* Date cell skeleton - exact width */}
                <Skeleton className="h-5 w-40" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Stats Skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Skeleton className="h-5 w-48" />
      </motion.div>
    </motion.div>
  );
}

