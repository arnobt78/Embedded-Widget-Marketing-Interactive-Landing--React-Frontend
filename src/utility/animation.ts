/**
 * Animation Utilities - Framer Motion Variants
 * 
 * These functions create reusable animation variants for Framer Motion.
 * They return animation configuration objects that define:
 * - initial: Starting state (before animation)
 * - animate: End state (after animation)
 * - transition: Animation timing and delay
 * 
 * Usage:
 * <motion.div variants={slideUp(0.2)} initial="initial" animate="animate">
 *   Content
 * </motion.div>
 * 
 * Benefits:
 * - Reusable across multiple components
 * - Consistent animation timing
 * - Customizable delay per component instance
 */

import { Variants } from "framer-motion";

/**
 * Slide Up Animation
 * 
 * Animates element from bottom (y: 50) to its natural position (y: 0)
 * while fading in from transparent (opacity: 0) to visible (opacity: 1)
 * 
 * @param {number} delay - Delay in seconds before animation starts (0-1 recommended)
 * @returns {Variants} Framer Motion variant object with initial, animate, and transition
 * 
 * @example
 * slideUp(0.2) // Starts animation after 0.2 seconds
 * slideUp(0.5) // Starts animation after 0.5 seconds
 */
export const slideUp = (delay: number = 0): Variants => {
  return {
    initial: {
      y: 50,        // Start 50px below final position
      opacity: 0,   // Start invisible
    },
    animate: {
      y: 0,         // End at natural position
      opacity: 1,   // End fully visible
      transition: {
        duration: 0.5,  // Animation takes 0.5 seconds
        delay: delay,   // Wait specified delay before starting
      },
    },
  };
};

/**
 * Slide Bottom Animation
 * 
 * Animates element from top (y: -100) to its natural position (y: 0)
 * while fading in from transparent to visible
 * 
 * @param {number} delay - Delay in seconds before animation starts (0-1 recommended)
 * @returns {Variants} Framer Motion variant object with initial, animate, and transition
 * 
 * @example
 * slideBottom(0.1) // Common use case for navbar (slides down from top)
 */
export const slideBottom = (delay: number = 0): Variants => {
  return {
    initial: {
      y: -100,      // Start 100px above final position (slides down)
      opacity: 0,   // Start invisible
    },
    animate: {
      y: 0,         // End at natural position
      opacity: 1,   // End fully visible
      transition: {
        duration: 0.5,  // Animation takes 0.5 seconds
        delay: delay,   // Wait specified delay before starting
      },
    },
  };
};
