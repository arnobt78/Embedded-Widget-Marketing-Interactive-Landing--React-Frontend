/**
 * Main App Component
 * 
 * This is the root component that composes all page sections together.
 * It follows a typical landing page structure:
 * - Navbar: Navigation header
 * - Hero: Main hero section with primary CTA
 * - Services: Services/features showcase
 * - Banner: Promotional banner section
 * - Cards: Feature cards grid
 * - Banner2: Secondary promotional banner
 * - Email: Newsletter signup and footer section
 * 
 * The overflow-x-hidden class prevents horizontal scrolling on smaller screens
 */

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Banner2 from "./components/Banner/Banner2";
import Email from "./components/Email/Email";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Cards />
      <Banner2 />
      <Email />
    </main>
  );
};

export default App;
