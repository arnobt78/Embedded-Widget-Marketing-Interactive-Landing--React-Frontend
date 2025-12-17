/**
 * App Component - Root Component
 * 
 * This is the main root component that orchestrates the entire landing page layout.
 * It composes all section components in order to create a complete marketing landing page.
 * 
 * Component Structure:
 * 1. Navbar - Navigation header
 * 2. Hero - Hero/landing section with main CTA
 * 3. Services - Services/features showcase
 * 4. Banner - Marketing banner section
 * 5. Cards - Feature cards grid
 * 6. Banner2 - Secondary banner section
 * 7. Email - Email subscription and social links footer
 * 8. FeedbackDashboard - Admin dashboard for viewing feedback
 * 
 * Layout Notes:
 * - overflow-x-hidden prevents horizontal scrolling on mobile
 * - Components are rendered in sequential order (top to bottom)
 * - Each component is self-contained and handles its own styling/animations
 */

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Banner2 from "./components/Banner/Banner2";
import Email from "./components/Email/Email";
import FeedbackDashboard from "./components/Dashboard/FeedbackDashboard";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Navigation bar - fixed at top, contains logo and menu */}
      <Navbar />
      
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
      
      {/* Feedback Dashboard - displays user feedback from API (for admin view, move as needed) */}
      <FeedbackDashboard />
    </main>
  );
};

export default App;
