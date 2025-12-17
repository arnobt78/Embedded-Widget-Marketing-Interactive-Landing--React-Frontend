/**
 * Banner Component - Marketing Banner Section
 *
 * A content banner section with text on left and image on right.
 * Uses scroll-triggered animations (whileInView) for elements that animate when scrolling into view.
 *
 * Key Features:
 * - Two-column layout (text left, image right)
 * - Scroll-triggered animations (animates when scrolled into viewport)
 * - Staggered text animations for visual appeal
 * - Image slides in from right side
 * - Responsive design (stacks on mobile)
 *
 * Animation Strategy:
 * - Text uses slideUp variant with different delays for cascading effect
 * - Image uses inline animation config for custom slide-in behavior
 * - whileInView ensures animations only trigger when visible (performance optimization)
 */

// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerImg from "../../assets/3.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner = () => {
  return (
    <>
      <div className="container py-20">
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section - Left side on desktop, top on mobile */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl xl:text-5xl font-semibold text-black/80"
            >
              Design is not what it looks like and feels like. Design is how{" "}
              <br />
              <span className="text-gray-400 underline">It Works</span>
            </motion.h1>
            {/* CTA Button with hover effects */}
            <motion.button
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate" // Triggers when scrolled into view
              className="primary-btn hover:bg-black  text-black hover:text-white duration-300"
            >
              More News
            </motion.button>

            {/* Two-column feature highlights */}
            <div className="flex gap-3">
              {/* First feature box */}
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">Design Tools</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
              </motion.div>

              {/* Second feature box */}
              <motion.div
                variants={slideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">Experiences</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
              </motion.div>
            </div>
          </div>

          {/* Banner Image section - Right side on desktop, bottom on mobile */}
          <div className="flex justify-center items-center">
            {/* Image with custom slide-in animation from right */}
            {/* md:!scale-125 makes image slightly larger on desktop for visual impact */}
            <motion.img
              initial={{
                opacity: 0, // Start invisible
                x: 100, // Start 100px to the right
              }}
              whileInView={{
                opacity: 1, // Fade in when scrolled into view
                x: 0, // Slide to natural position
              }}
              transition={{
                duration: 0.5, // Animation duration
                delay: 0.5, // Start after 0.5s delay
              }}
              src={BannerImg}
              alt=""
              className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
