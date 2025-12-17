/**
 * Cards Component - Feature Cards Grid
 *
 * Displays a grid of feature/service cards with icons, titles, and descriptions.
 * Uses scroll-triggered animations with staggered delays for visual appeal.
 *
 * Layout:
 * - Responsive grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
 * - Cards have shadow effects and rounded corners
 * - Background section (bg-gray-50) provides visual separation
 *
 * Animation:
 * - Each card uses slideUp animation with increasing delays
 * - whileInView triggers animations when cards enter viewport
 * - Creates cascading effect as user scrolls
 *
 * Card Structure:
 * - Icon/Image at top (circular background)
 * - Title heading
 * - Description text
 * - "Learn More" link
 */

// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/icon/1.png";
import Img2 from "../../assets/icon/2.png";
import Img3 from "../../assets/icon/3.png";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      {/* Background section for visual separation */}
      <div className="bg-gray-50">
        <div className="container py-14">
          {/* Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 - About */}
            {/* shadow-xl gives it more emphasis (first card) */}
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate" // Scroll-triggered animation
              className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              {/* Icon with circular black background */}
              <img
                src={Img1}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">About</p>
              <p className="text-sm text-black/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>

            {/* Card 2 - Connection */}
            <motion.div
              variants={slideUp(0.4)} // 0.4s delay (second card)
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img2}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">Connection</p>
              <p className="text-sm text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>

            {/* Card 3 - Plugin */}
            <motion.div
              variants={slideUp(0.6)} // 0.6s delay (third card)
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img3}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">Plugin</p>
              <p className="text-sm text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
