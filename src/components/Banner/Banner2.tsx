/**
 * Banner2 Component - Secondary Marketing Banner Section
 *
 * Similar to Banner component but with reversed layout (image left, text right).
 * This creates visual variety and breaks up the page flow.
 *
 * Key Differences from Banner:
 * - Image on left, text on right (reversed layout)
 * - Image slides in from left (x: -100) instead of right
 * - Slightly different styling and content
 *
 * Design Pattern:
 * - Alternating layouts (left-right, right-left) create visual rhythm
 * - Helps maintain user engagement through page scroll
 * - Each banner can have different messaging/styling
 */

// eslint-disable-next-line no-unused-vars
import BannerImg from "../../assets/4.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <>
      <div className="container py-20">
        {/* Two-column grid layout (same as Banner but reversed order) */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Banner Image section - LEFT side (first in DOM order on desktop) */}
          <div className="flex justify-center items-center">
            {/* Image slides in from LEFT (negative x value) */}
            <motion.img
              initial={{
                opacity: 0,
                x: -100, // Start 100px to the LEFT (opposite of Banner component)
              }}
              whileInView={{ opacity: 1, x: 0 }} // Slide to center when visible
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerImg}
              alt=""
              className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-110"
            />
          </div>

          {/* Text content section - RIGHT side on desktop, bottom on mobile */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pl-10 md:py-0 md:px-0 md:items-start xl:max-w-[400px] mx-auto">
            <motion.p
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="uppercase"
            >
              Tech addicts
            </motion.p>
            <motion.h1
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-4xl xl:text-5xl font-semibold text-black/80"
            >
              They really understood our <br />
              <span className="text-gray-400 underline">Needs</span>
            </motion.h1>
            <motion.button
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn hover:bg-black  text-black hover:text-white duration-300"
            >
              More News
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
