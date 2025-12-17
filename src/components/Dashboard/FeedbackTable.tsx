/**
 * FeedbackTable Component - TanStack React Table Implementation
 *
 * Displays feedback data in a modern, feature-rich table using TanStack React Table.
 *
 * Features:
 * - Sorting by columns
 * - Column visibility toggles
 * - Responsive design
 * - Skeleton loading states
 * - Star rating display
 * - Email badges
 * - Modern animations (pulse, shadow, blinking)
 *
 * Columns:
 * - Name: User's name
 * - Email: Email with badge styling
 * - Message: Feedback message
 * - Rating: Star rating display
 * - Date: Formatted creation date
 */

import { useMemo, useState, useEffect, memo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  Row,
  SortingState,
  Updater,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useFeedbackQuery, FeedbackItem } from "../../hooks/useFeedbackQuery";
import { useToast } from "../../contexts/ToastContext";
import { Badge } from "../ui/Badge";
import FeedbackTableSkeleton from "./FeedbackTableSkeleton";
import { Star, Search } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Window interface extension for refreshFeedbackDashboard
 */
declare global {
  interface Window {
    refreshFeedbackDashboard?: () => void;
  }
}

/**
 * Column Helper - TypeScript column definitions
 */
const columnHelper = createColumnHelper<FeedbackItem>();

/**
 * StarRating Component Props
 */
interface StarRatingProps {
  rating: number;
}

/**
 * StarRating Component - Displays star rating visually
 *
 * Memoized for performance optimization
 */
const StarRating = memo(function StarRating({ rating }: StarRatingProps): JSX.Element {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: star * 0.05 }}
          whileHover={{ scale: 1.2 }}
        >
          <Star
            className={cn(
              "w-4 h-4 transition-all duration-200",
              star <= rating
                ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                : "fill-gray-200 text-gray-200"
            )}
          />
        </motion.div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="ml-2 text-sm font-medium text-gray-600"
      >
        ({rating})
      </motion.span>
    </div>
  );
});

/**
 * TableRow Component Props
 */
interface TableRowProps {
  row: Row<FeedbackItem>;
  index: number;
}

/**
 * TableRow Component - Memoized Table Row
 *
 * Optimized table row component with memoization for performance
 */
const TableRow = memo(function TableRow({ row, index }: TableRowProps): JSX.Element {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ scale: 1.01, backgroundColor: "rgba(249, 250, 251, 0.8)" }}
      className="hover:bg-gray-50/80 transition-all duration-200 border-b border-gray-100 hover:shadow-sm"
    >
      {row.getVisibleCells().map((cell) => (
        <motion.td
          key={cell.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.03 + 0.1 }}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </motion.td>
      ))}
    </motion.tr>
  );
});

/**
 * FeedbackTable Component - Enhanced with Query Params and Toast Support
 *
 * Main table component displaying feedback data with:
 * - TanStack React Table for advanced features
 * - Query params for search and sorting
 * - Toast notifications for errors
 * - Widget integration for real-time updates
 * - Optimized performance with memoization
 */
export default function FeedbackTable(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToast } = useToast();
  const {
    data: feedbacks,
    isLoading,
    error,
    refetch,
    allData,
  } = useFeedbackQuery();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  /**
   * Sync table sorting with URL query params for shareable links
   * Get sortBy and sortOrder from URL params
   */
  const sortByParam = searchParams.get("sortBy") || "";
  const sortOrderParam = searchParams.get("sortOrder") || "desc";

  // Convert URL params to table sorting state format
  const sorting = useMemo(() => {
    if (!sortByParam) return [{ id: "createdAt", desc: true }]; // Default sort
    return [{ id: sortByParam, desc: sortOrderParam === "desc" }];
  }, [sortByParam, sortOrderParam]);

  /**
   * Handle table sorting changes and sync with URL params
   */
  const handleSortingChange = (updater: Updater<SortingState>): void => {
    const newSorting: SortingState =
      typeof updater === "function" ? updater(sorting) : updater;
    const newParams = new URLSearchParams(searchParams);

    if (newSorting.length > 0) {
      const sort = newSorting[0];
      if (sort) {
        newParams.set("sortBy", sort.id);
        newParams.set("sortOrder", sort.desc ? "desc" : "asc");
      }
    } else {
      newParams.delete("sortBy");
      newParams.delete("sortOrder");
    }

    setSearchParams(newParams);
  };

  /**
   * Widget Integration - Expose refresh function globally
   * Allows the feedback widget to trigger a dashboard refresh after submission
   * Also shows success toast notification
   */
  useEffect(() => {
    window.refreshFeedbackDashboard = () => {
      refetch();
      addToast("Feedback received! Dashboard updated.", "success");
    };

    // Cleanup on unmount
    return () => {
      delete window.refreshFeedbackDashboard;
    };
  }, [refetch, addToast]);

  /**
   * Handle search input change with debounce
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== searchParams.get("search")) {
        const newParams = new URLSearchParams(searchParams);
        if (searchInput) {
          newParams.set("search", searchInput);
        } else {
          newParams.delete("search");
        }
        setSearchParams(newParams);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, searchParams, setSearchParams]);

  /**
   * Handle error state with toast notification
   */
  useEffect(() => {
    if (error) {
      addToast(`Error loading feedback: ${error.message}`, "error", 5000);
    }
  }, [error, addToast]);

  /**
   * Column Definitions
   * Using columnHelper for type-safe column creation
   */
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue() || "-",
        enableSorting: true,
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: (info) => {
          const email = info.getValue();
          return email ? (
            <Badge variant="secondary" className="font-mono text-xs">
              {email}
            </Badge>
          ) : (
            "-"
          );
        },
        enableSorting: true,
      }),
      columnHelper.accessor("message", {
        header: "Message",
        cell: (info) => (
          <div className="max-w-md truncate" title={info.getValue()}>
            {info.getValue()}
          </div>
        ),
        enableSorting: true,
      }),
      columnHelper.accessor("rating", {
        header: "Rating",
        cell: (info) => {
          const rating = info.getValue();
          return rating ? (
            <StarRating rating={rating} />
          ) : (
            <span className="text-gray-400">-</span>
          );
        },
        enableSorting: true,
      }),
      columnHelper.accessor("createdAt", {
        header: "Date",
        cell: (info) => {
          const dateValue = info.getValue();
          if (!dateValue) return "-";
          const date = new Date(dateValue);
          return date.toLocaleString();
        },
        enableSorting: true,
        sortingFn: (rowA, rowB) => {
          const aDate = new Date(rowA.original.createdAt || 0).getTime();
          const bDate = new Date(rowB.original.createdAt || 0).getTime();
          return aDate - bDate;
        },
      }),
    ],
    []
  );

  /**
   * React Table Instance
   * Configures table with data, columns, and sorting
   * Sorting is synced with URL query params for shareable links
   */
  const table = useReactTable({
    data: feedbacks,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: handleSortingChange,
    state: {
      sorting,
    },
    manualSorting: false, // Client-side sorting handled by table
    // Default sorting by date descending
  });

  // Loading state with precise skeleton
  if (isLoading) {
    return <FeedbackTableSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-7xl mx-auto"
    >
      {/* Header with animated pulse, shadow, and blinking effects */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.005 }}
        className="mb-6 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border-2 border-blue-200 shadow-xl backdrop-blur-sm relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)",
              "linear-gradient(90deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
              "linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10">
          <motion.h2
            animate={{
              textShadow: [
                "0 0 0px rgba(59, 130, 246, 0)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 0px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-2"
          >
            User Feedback Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg mb-4"
          >
            View and manage user feedback submissions
          </motion.p>

          {/* Search Input with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative max-w-md"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-hover:text-blue-500" />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 shadow-sm hover:shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Table Container with Enhanced Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        whileHover={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-shadow duration-300"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b-2 border-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, headerIndex) => (
                    <motion.th
                      key={header.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + headerIndex * 0.05 }}
                      className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-200/50 transition-all duration-200 group"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <motion.span
                            className="text-gray-400 group-hover:text-blue-500 transition-colors"
                            whileHover={{ scale: 1.2 }}
                          >
                            {(() => {
                              const sorted = header.column.getIsSorted();
                              if (sorted === "asc") return " ↑";
                              if (sorted === "desc") return " ↓";
                              return " ↕";
                            })()}
                          </motion.span>
                        )}
                      </div>
                    </motion.th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row, index) => (
                <TableRow key={row.id} row={row} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State with Animation */}
        {table.getRowModel().rows.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">
                No feedback entries found.
              </p>
              {searchParams.get("search") && (
                <p className="text-sm text-gray-400">
                  Try adjusting your search criteria
                </p>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Footer Stats with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex items-center justify-between"
      >
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span className="font-medium">
            Showing {table.getRowModel().rows.length} of {allData.length}{" "}
            entries
          </span>
          {searchParams.get("search") && (
            <Badge variant="outline" className="text-xs">
              Filtered
            </Badge>
          )}
        </div>
        {table.getRowModel().rows.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs text-gray-400"
          >
            Last updated: {new Date().toLocaleTimeString()}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
