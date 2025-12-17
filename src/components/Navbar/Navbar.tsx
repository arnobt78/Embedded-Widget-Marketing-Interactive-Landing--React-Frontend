/**
 * Navbar Component - Navigation Header
 *
 * Displays the main navigation bar with logo, menu links, and CTA button.
 * Uses Framer Motion for smooth slide-down animation on page load.
 *
 * Features:
 * - Responsive design (menu hidden on mobile with md:block)
 * - Animated entrance using slideBottom animation
 * - Logo and brand name
 * - Navigation links array (easily customizable)
 * - Call-to-action button
 *
 * Responsive Behavior:
 * - Desktop (md and up): Shows full menu with links
 * - Mobile: Hides menu links (can be extended with mobile menu toggle)
 */

import { Link } from "react-router-dom";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

/**
 * Navigation Link Interface
 */
interface NavbarLink {
  id: number;
  title: string;
  link: string;
}

/**
 * Navigation Links Configuration
 *
 * Array of navigation menu items. Each item contains:
 * - id: Unique identifier for React keys
 * - title: Display text for the link
 * - link: URL path or anchor (# for same-page sections)
 *
 * To add/modify links, simply update this array.
 */
const NavbarLinks: NavbarLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Features",
    link: "#",
  },
  {
    id: 3,
    title: "Shop",
    link: "#",
  },
  {
    id: 4,
    title: "About us",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

/**
 * Navbar Component
 * 
 * Navigation header component with logo, menu links, and dashboard link
 */
const Navbar = (): JSX.Element => {
  return (
    <>
      {/* Animated navbar container - slides down from top on page load */}
      <motion.div
        variants={slideBottom(0.2)} // Animation variant with 0.2s delay
        initial="initial" // Start state (hidden, above)
        animate="animate" // End state (visible, in position)
        className="py-8 container flex justify-between items-center"
      >
        {/* Logo section - Brand identity (clickable to navigate home) */}
        <Link 
          to="/" 
          className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          aria-label="Go to homepage"
        >
          <img src={Logo} alt="HUSTLE Logo" className="w-[70px]" />
          <p className="font-bold text-2xl">HUSTLE</p>
        </Link>

        {/* Link section - Navigation menu (hidden on mobile, visible on md screens and up) */}
        {/* md:block means display:block at medium breakpoint and above */}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-7">
            {/* Map through NavbarLinks array to render navigation items */}
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="hover:text-primary uppercase text-sm xl:text-base"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Button section - Navigation to Dashboard with animated pulse effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 4px 6px -1px rgba(253, 205, 45, 0.3), 0 2px 4px -1px rgba(253, 205, 45, 0.2)",
                "0 10px 15px -3px rgba(253, 205, 45, 0.4), 0 4px 6px -2px rgba(253, 205, 45, 0.3)",
                "0 4px 6px -1px rgba(253, 205, 45, 0.3), 0 2px 4px -1px rgba(253, 205, 45, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/dashboard"
              className="bg-primary text-black font-semibold py-2.5 px-6 rounded-lg inline-block transition-all duration-200 hover:bg-primary/90 shadow-lg"
            >
              User Feedback Dashboard
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
