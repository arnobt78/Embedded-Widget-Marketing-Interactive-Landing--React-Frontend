/**
 * Services Component - Features/Services Showcase Section
 *
 * Displays services or features in a grid layout with images and descriptions.
 * Uses scroll-triggered animations (whileInView) so elements animate when they enter viewport.
 *
 * Animation Strategy:
 * - whileInView: Animation triggers when component enters viewport (scroll-based)
 * - Staggered delays: Each card animates with increasing delay (0.2s, 0.4s, 0.6s, 0.8s)
 * - Slide from right: Cards slide in from right side with fade-in
 *
 * Layout:
 * - Header section with title and description
 * - Grid of service cards (responsive: 1 col mobile, 2 cols tablet, 3 cols desktop)
 * - Each card contains icon, title, and description
 */

// eslint-disable-next-line no-unused-vars
import React from "react";
import ServiceImg from "../../assets/2.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="container py-12">
        {/* Header section - Title and tagline */}
        {/* whileInView: Animation triggers when scrolling into view */}
        <motion.div
          initial={{ opacity: 0 }} // Start invisible
          whileInView={{ opacity: 1 }} // Become visible when in viewport
          className="py-12 flex justify-between items-center"
        >
          <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
            Classes to Spark Your{" "}
            <span className="text-gray-400 underline">Creativity</span>
          </h1>
          <p className="hidden md:block">
            Notified to Spark your <br></br>
            <span className="text-gray-400 underline flex flex-col text-right">
              Balance
            </span>{" "}
          </p>
        </motion.div>
        {/* Cards section - Grid layout with service cards */}
        {/* Responsive grid: 1 column on mobile, 2 columns on small screens and up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First card - Large image card */}
          {/* Staggered animation delays create cascading effect */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Start invisible, 100px to the right
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible, natural position
            transition={{ duration: 0.5, delay: 0.2 }} // 0.5s duration, 0.2s delay
          >
            <img
              src={ServiceImg}
              alt=""
              className="w-[300px] mx-auto md:max-w-[500px]"
            />
          </motion.div>
          {/* Second card - Service card with icon and description */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} // 0.4s delay (second)
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Learn By doing</p>
            <p className="text-gray-500 pl-6 border-l-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
              asperiores magnam? Assumenda perferendis optio dicta natus nobis,
              cupiditate eveniet libero ratione quam iusto!
            </p>
          </motion.div>
          {/* Third card - Service card with icon and description */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }} // 0.6s delay (third)
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Learn By doing</p>
            <p className="text-gray-500 pl-6 border-l-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
              asperiores magnam? Assumenda perferendis optio dicta natus nobis,
              cupiditate eveniet libero ratione quam iusto!
            </p>
          </motion.div>
          {/* Fourth card - Service card with icon and description */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }} // 0.8s delay (fourth)
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Learn By doing</p>
            <p className="text-gray-500 pl-6 border-l-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
              asperiores magnam? Assumenda perferendis optio dicta natus nobis,
              cupiditate eveniet libero ratione quam iusto!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
