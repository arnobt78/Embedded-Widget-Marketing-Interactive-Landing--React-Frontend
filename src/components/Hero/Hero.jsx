/**
 * Hero Component
 * 
 * The main hero section of the landing page - typically the first thing users see.
 * Features:
 * - Large headline with animated text
 * - Supporting description text
 * - Call-to-action button
 * - Hero image with slide-in animation
 * - Fully responsive layout (stacks on mobile, side-by-side on desktop)
 */

import HeroImg from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <div className="container">
        {/* 
          Grid Layout:
          - grid-cols-1: Single column on mobile
          - md:grid-cols-2: Two columns on medium screens and up
          - min-h: Ensures minimum height for proper spacing
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section */}
          {/* 
            Responsive classes breakdown:
            - space-y-5: Vertical spacing between children
            - flex flex-col: Stack children vertically
            - justify-center: Center content vertically
            - items-center: Center items horizontally (mobile)
            - md:items-start: Align left on desktop
            - text-center md:text-left: Center text on mobile, left on desktop
          */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            {/* 
              Main headline with staggered animation
              - slideUp(0.2): Starts animation after 0.2s delay
              - Different delays create a cascading effect
            */}
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl xl:text-5xl font-bold"
            >
              Unlock a Passion, Side Hustle, or New{" "}
              {/* Inline span for styling specific words */}
              <span className="text-gray-400 underline">Profession</span>
            </motion.h1>
            
            {/* Supporting text with later animation delay */}
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos eligendi mollitia{" "}
            </motion.p>
            
            {/* CTA Button with latest animation delay */}
            <motion.button
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn bg-gray-900 hover:bg-primary duration-300"
            >
              More News
            </motion.button>
          </div>
          
          {/* Hero Image section */}
          <div className="flex justify-center items-center">
            {/* 
              Image with custom animation (not using utility function)
              - initial: Starts 100px to the right and invisible
              - animate: Moves to position 0 and becomes visible
              - transition: Controls animation timing
            */}
            <motion.img
              initial={{
                opacity: 0,
                x: 100,  // Start 100px to the right
              }}
              animate={{ opacity: 1, x: 0 }}  // End at natural position
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroImg}
              alt=""
              className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
