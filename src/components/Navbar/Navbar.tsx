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
        {/* Logo section - Brand identity */}
        <div className="flex items-center gap-1">
          <img src={Logo} alt="HUSTLE Logo" className="w-[70px]" />
          <p className="font-bold text-2xl">HUSTLE</p>
        </div>

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

        {/* Button section - Navigation to Dashboard */}
        <div>
          <Link to="/dashboard" className="primary-btn inline-block">
            User Feedback Dashboard
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
