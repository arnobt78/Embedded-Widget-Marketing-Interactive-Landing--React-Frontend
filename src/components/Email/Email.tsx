/**
 * Email Component - Newsletter Subscription & Social Links Footer
 *
 * Final section of the landing page featuring:
 * - Email subscription call-to-action
 * - Social media links/icons
 * - Background image for visual appeal
 *
 * Features:
 * - Background image styling (inline style object)
 * - Scale animation on scroll (zooms in from 50% to 100%)
 * - Social media icons using react-icons library
 * - Centered layout with spacing
 *
 * Styling Approach:
 * - Uses inline style object for background image (dynamic URL)
 * - Tailwind classes for layout and spacing
 * - React Icons for consistent, scalable social media icons
 */

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterImg from "../../assets/5.png";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

/**
 * Background Style Configuration
 *
 * Inline style object for background image.
 * This approach is used when you need dynamic values (like image URLs) in styles.
 * Alternative: Could use CSS background-image with CSS variables, but inline works well here.
 */
const bgStyle: CSSProperties = {
  backgroundImage: `url(${FooterImg})`, // Dynamic image URL from import
  backgroundRepeat: "no-repeat", // Single image, don't repeat
  backgroundSize: "cover", // Cover entire container
  backgroundPosition: "center", // Center the image
};

/**
 * Email Component - Newsletter Subscription & Social Links Footer
 */
const Email = (): JSX.Element => {
  return (
    <div style={bgStyle}>
      {/* Animated container with scale effect (zooms in when scrolled into view) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} // Start at 50% size, invisible
        whileInView={{ opacity: 1, scale: 1 }} // Zoom to 100% size, visible when in viewport
        className="container text-center space-y-10 py-10"
      >
        {/* Email subscription heading */}
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-bold">Join our email</p>
          <p>Get 20% off per order</p>
        </div>

        {/* CTA button and social links */}
        <div className=" space-y-5">
          {/* Subscribe button */}
          <button className="primary-btn text-black">Subscribe</button>

          {/* Social media icons */}
          {/* react-icons provides consistent, scalable SVG icons */}
          <div className="flex flex-row justify-center gap-3">
            <FaFacebook /> {/* Facebook icon */}
            <FaTwitter /> {/* Twitter icon */}
            <FaInstagram /> {/* Instagram icon */}
            <FaLinkedin /> {/* LinkedIn icon */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Email;
