/**
 * Animation Utility Functions for Framer Motion
 * 
 * These functions return animation configuration objects that can be used
 * with Framer Motion's motion components. They provide reusable animation
 * variants for consistent animations throughout the app.
 * 
 * @param {number} delay - Delay in seconds before animation starts
 * @returns {object} Animation variant object with initial and animate states
 */

/**
 * slideUp Animation
 * 
 * Creates an animation that slides an element up from below while fading in.
 * - Initial: Element starts 50px below its final position and is invisible
 * - Animate: Element moves to its natural position (y: 0) and becomes visible
 * 
 * Usage: <motion.div variants={slideUp(0.2)} initial="initial" animate="animate">
 */
export const slideUp = (delay) => {
  return {
    initial: {
      y: 50,        // Start 50px below the final position
      opacity: 0,   // Start invisible
    },
    animate: {
      y: 0,         // End at natural position
      opacity: 1,   // End fully visible
      transition: {
        duration: 0.5,  // Animation takes 0.5 seconds
        delay: delay,   // Custom delay passed as parameter
      },
    },
  };
};

/**
 * slideBottom Animation
 * 
 * Creates an animation that slides an element down from above while fading in.
 * - Initial: Element starts 100px above its final position and is invisible
 * - Animate: Element moves to its natural position and becomes visible
 * 
 * Usage: <motion.div variants={slideBottom(0.2)} initial="initial" animate="animate">
 */
export const slideBottom = (delay) => {
  return {
    initial: {
      y: -100,      // Start 100px above the final position
      opacity: 0,   // Start invisible
    },
    animate: {
      y: 0,         // End at natural position
      opacity: 1,   // End fully visible
      transition: {
        duration: 0.5,  // Animation takes 0.5 seconds
        delay: delay,    // Custom delay passed as parameter
      },
    },
  };
};
