/**
 * Badge Component - ShadCN UI Style Badge with Animations
 * 
 * Reusable badge component for displaying labels, tags, or status indicators.
 * Supports multiple variants and sizes with smooth hover animations.
 * 
 * Variants:
 * - default: Primary style
 * - secondary: Secondary style
 * - destructive: Error/warning style
 * - outline: Outlined style
 */

import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";

/**
 * Badge variants configuration using class-variance-authority
 * Provides type-safe variant props
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-black hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Badge Variant Props
 */
export interface BadgeVariants extends VariantProps<typeof badgeVariants> {}

/**
 * Badge Component Props
 */
export interface BadgeProps extends HTMLMotionProps<"div">, BadgeVariants {
  className?: string;
  children: ReactNode;
}

/**
 * Badge Component
 */
function Badge({ className, variant, children, ...props }: BadgeProps): JSX.Element {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={cn(badgeVariants({ variant }), "hover:shadow-md", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { Badge, badgeVariants };

