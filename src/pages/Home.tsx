/**
 * Home Page Component - Landing Page
 * 
 * Main landing page with all marketing sections.
 * This is the original landing page content.
 */

import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Banner2 from "../components/Banner/Banner2";
import Email from "../components/Email/Email";

/**
 * Home Page Component
 * 
 * Main landing page with all marketing sections.
 */
export default function Home(): JSX.Element {
  return (
    <>
      {/* Hero section - main landing area with headline and CTA */}
      <Hero />

      {/* Services section - showcases features/services */}
      <Services />

      {/* Banner section - marketing content with image and text */}
      <Banner />

      {/* Cards section - feature cards in a grid layout */}
      <Cards />

      {/* Second banner section - alternative layout with reversed image/text order */}
      <Banner2 />

      {/* Email/Footer section - subscription form and social links */}
      <Email />
    </>
  );
}

