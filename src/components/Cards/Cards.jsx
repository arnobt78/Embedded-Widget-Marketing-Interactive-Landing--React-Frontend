/**
 * Cards Component
 * 
 * Feature cards section displaying three key features/services.
 * Features:
 * - Gray background section for visual separation
 * - Three feature cards in a responsive grid
 * - Each card has: icon, title, description, and link
 * - Staggered scroll animations
 * - Responsive: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
 */

import Img1 from "../../assets/icon/1.png";
import Img2 from "../../assets/icon/2.png";
import Img3 from "../../assets/icon/3.png";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      {/* Gray background for visual section separation */}
      <div className="bg-gray-50">
        <div className="container py-14">
          {/* 
            Responsive grid layout:
            - grid-cols-1: 1 column on mobile
            - sm:grid-cols-2: 2 columns on small screens
            - md:grid-cols-3: 3 columns on medium+ screens
            - gap-8: Spacing between cards
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1: About */}
            {/* 
              shadow-xl: Extra large shadow for first card (emphasis)
              rounded-xl: Large border radius for modern look
            */}
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              {/* 
                Icon with circular black background
                - rounded-full: Makes it circular
                - object-contain: Maintains aspect ratio
                - p-3: Padding inside the circle
              */}
              <img
                src={Img1}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">About</p>
              {/* 
                leading-relaxed: Increases line height for better readability
                text-black/80: 80% opacity black
              */}
              <p className="text-sm text-black/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            
            {/* Card 2: Connection */}
            {/* shadow-md: Medium shadow (less emphasis than first card) */}
            <motion.div
              variants={slideUp(0.4)}
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
            
            {/* Card 3: Plugin */}
            <motion.div
              variants={slideUp(0.6)}
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
