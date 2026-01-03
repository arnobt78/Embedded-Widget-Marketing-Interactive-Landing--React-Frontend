/**
 * Email Component (Newsletter/Footer Section)
 * 
 * Final section of the landing page featuring:
 * - Background image overlay
 * - Newsletter signup CTA
 * - Social media icons
 * - Scale and fade animation on scroll
 * 
 * This component serves as both the newsletter section and footer.
 */

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterImg from "../../assets/5.png";
import { motion } from "framer-motion";

/**
 * Background Style Object
 * 
 * Inline style object for background image.
 * Using inline styles here because Tailwind doesn't support dynamic
 * background images via className (would need arbitrary values).
 * 
 * Alternative: Could use CSS custom properties or Tailwind's arbitrary values
 */
const bgStyle = {
  backgroundImage: `url(${FooterImg})`,  // Background image from assets
  backgroundRepeat: "no-repeat",        // Don't repeat the image
  backgroundSize: "cover",               // Cover entire container
  backgroundPosition: "center",         // Center the image
};

const Email = () => {
  return (
    <div style={bgStyle}>
      {/* 
        Scale animation: Starts at 50% size and invisible, scales to 100% and visible
        This creates a "zoom in" effect when scrolled into view
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}  // Start small and invisible
        whileInView={{ opacity: 1, scale: 1 }}  // End full size and visible
        className="container text-center space-y-10 py-10"
      >
        {/* Newsletter heading section */}
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-bold">Join our email</p>
          <p>Get 20% off per order</p>
        </div>
        
        {/* CTA and social links section */}
        <div className=" space-y-5">
          {/* Subscribe button */}
          <button className="primary-btn text-black">Subscribe</button>
          
          {/* Social media icons */}
          {/* 
            react-icons: Popular icon library for React
            Icons are imported from react-icons/fa (Font Awesome)
            - FaFacebook, FaTwitter, FaInstagram, FaLinkedin
          */}
          <div className="flex flex-row justify-center gap-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Email;
