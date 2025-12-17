/**
 * Hero Component - Main Landing Section
 *
 * The hero section is the first thing users see on the landing page.
 * It typically contains the main headline, value proposition, and primary CTA.
 *
 * Layout:
 * - Two-column grid on desktop (text left, image right)
 * - Single column on mobile (stacked vertically)
 * - Uses Tailwind CSS grid system for responsive layout
 *
 * Animations:
 * - Text elements use staggered slideUp animations (different delays create cascading effect)
 * - Image slides in from right with fade-in effect
 * - All animations trigger on component mount
 *
 * Design Pattern:
 * - Large, bold headline with highlighted text
 * - Supporting description paragraph
 * - Prominent call-to-action button
 */

import HeroImg from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

/**
 * Hero Component - Main Landing Section
 */
const Hero = (): JSX.Element => {
  return (
    <>
      <div className="container">
        {/* Grid layout: 1 column on mobile, 2 columns on md and up */}
        {/* min-h ensures consistent height across screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section - Left side on desktop, top on mobile */}
          {/* Responsive text alignment: center on mobile, left on desktop */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            {/* Main headline with staggered animation */}
            {/* delay: 0.2s - appears first */}
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl xl:text-5xl font-bold"
            >
              Unlock a Passion, Side Hustle, or New{" "}
              {/* Highlighted text with different styling */}
              <span className="text-gray-400 underline">Profession</span>
            </motion.h1>

            {/* Supporting text with later animation */}
            {/* delay: 0.5s - appears after headline */}
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos eligendi mollitia{" "}
            </motion.p>

            {/* Call-to-action button with latest animation */}
            {/* delay: 0.8s - appears last, draws attention */}
            <motion.button
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn bg-gray-900 hover:bg-primary duration-300"
            >
              More News
            </motion.button>
          </div>

          {/* Hero Image section - Right side on desktop, bottom on mobile */}
          <div className="flex justify-center items-center">
            {/* Image with custom animation (slides in from right) */}
            {/* Inline animation config (not using variant for custom behavior) */}
            <motion.img
              initial={{
                opacity: 0, // Start invisible
                x: 100, // Start 100px to the right
              }}
              animate={{
                opacity: 1, // End visible
                x: 0, // End at natural position
              }}
              transition={{
                duration: 0.5, // Animation duration
                delay: 0.5, // Start after 0.5s (coordinates with text animations)
              }}
              src={HeroImg}
              alt="Hero illustration showcasing professional growth and development"
              className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
