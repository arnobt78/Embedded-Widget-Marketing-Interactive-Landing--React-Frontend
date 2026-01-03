/**
 * Navbar Component
 * 
 * This component renders the main navigation bar at the top of the page.
 * Features:
 * - Logo and brand name
 * - Navigation links (hidden on mobile, visible on md+ screens)
 * - CTA button for quotes
 * - Animated entrance using Framer Motion
 */

import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

/**
 * Navigation Links Data
 * 
 * Array of navigation items. Each object contains:
 * - id: Unique identifier for React key prop
 * - title: Display text for the link
 * - link: URL destination (currently using placeholders)
 */
const NavbarLinks = [
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

const Navbar = () => {
  return (
    <>
      {/* 
        motion.div: Framer Motion animated div
        - variants: Uses slideBottom animation with 0.2s delay
        - initial: Starting animation state
        - animate: Ending animation state
        - className: Tailwind classes for layout and spacing
      */}
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="py-8 container flex justify-between items-center"
      >
        {/* Logo section - Brand identity */}
        <div className="flex items-center gap-1">
          <img src={Logo} alt="" className="w-[70px]" />
          <p className="font-bold text-2xl">HUSTLE</p>
        </div>
        
        {/* Link section - Responsive navigation menu */}
        {/* hidden md:block = Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:block">
          <ul className="flex gap-3 xl:gap-7">
            {/* 
              map() iterates over NavbarLinks array and creates a list item for each link
              key={link.id} is required by React for list items
            */}
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
        
        {/* Button section - Call to Action */}
        <div>
          <button className="primary-btn">Request For Quotes</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
