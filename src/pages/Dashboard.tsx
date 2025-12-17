/**
 * Dashboard Page Component
 * 
 * Main dashboard page displaying user feedback in a table format.
 * Uses TanStack React Table for advanced table features.
 * 
 * Features:
 * - Modern table with sorting
 * - Star rating display
 * - Email badges
 * - Animated loading states
 * - Responsive design
 * - Smooth page transitions
 */

import { motion } from "framer-motion";
import FeedbackTable from "../components/Dashboard/FeedbackTable";

/**
 * Dashboard Page Component
 * 
 * Main dashboard page displaying user feedback in a table format.
 */
export default function Dashboard(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30"
    >
      <FeedbackTable />
    </motion.div>
  );
}

