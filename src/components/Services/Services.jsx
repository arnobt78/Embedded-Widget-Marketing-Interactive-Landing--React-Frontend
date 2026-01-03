/**
 * Services Component
 * 
 * Displays the services/features section with:
 * - Header with title and description
 * - Grid layout of service cards
 * - Scroll-triggered animations (whileInView)
 * - Responsive grid (1 column mobile, 2 columns tablet+)
 */

import ServiceImg from "../../assets/2.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="container py-12">
        {/* Header section */}
        {/* 
          whileInView: Animation triggers when element enters viewport
          This creates a "reveal on scroll" effect
        */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-12 flex justify-between items-center"
        >
          <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
            Classes to Spark Your{" "}
            <span className="text-gray-400 underline">Creativity</span>
          </h1>
          {/* Hidden on mobile, visible on desktop */}
          <p className="hidden md:block">
            Notified to Spark your <br></br>
            <span className="text-gray-400 underline flex flex-col text-right">Balance</span>{" "}
          </p>
        </motion.div>
        
        {/* Cards section */}
        {/* 
          Responsive grid:
          - grid-cols-1: 1 column on mobile
          - sm:grid-cols-2: 2 columns on small screens and up
          - gap-8: Spacing between grid items
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Large featured image - first grid item */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}  // Start invisible, 100px to the right
            whileInView={{ opacity: 1, x: 0 }}  // Animate when scrolled into view
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={ServiceImg}
              alt=""
              className="w-[300px] mx-auto md:max-w-[500px]"
            />
          </motion.div>
          
          {/* Service card 1 */}
          {/* 
            Staggered delays (0.4, 0.6, 0.8) create a sequential reveal effect
            Each card animates in after the previous one
          */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Learn By doing</p>
            {/* 
              pl-6 border-l-2: Creates a left border with padding
              This creates a visual accent/quote-like styling
            */}
            <p className="text-gray-500 pl-6 border-l-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
              asperiores magnam? Assumenda perferendis optio dicta natus nobis,
              cupiditate eveniet libero ratione quam iusto!
            </p>
          </motion.div>
          
          {/* Service card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
          
          {/* Service card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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
