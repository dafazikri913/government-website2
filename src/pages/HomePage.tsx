import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Gallery } from "../components/Gallery";
import { News } from "../components/News";
import { Articles } from "../components/Articles";
import { Events } from "../components/Events";
import { BusinessGallery } from "../components/BusinessGallery";
import { MarketPrice } from "../components/MarketPrice";
import { AccessToSumbawa } from "../components/AccessToSumbawa";
import { Footer } from "../components/Footer";

export function HomePage() {
  const location = useLocation();

  // Handle hash navigation and scroll to top
  useEffect(() => {
    if (location.hash) {
      // If there's a hash, scroll to that section
      const sectionId = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Use setTimeout to ensure the page is fully loaded
        setTimeout(() => {
          const offset = 80; // Height of navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-white">
          <Gallery />
        </div>
        <div className="bg-gray-50">
          <News />
        </div>
        <div className="bg-gray-100">
          <Articles />
        </div>
        <div className="bg-gray-50">
          <Events />
        </div>
        <div className="bg-gray-100">
          <BusinessGallery />
        </div>
        <div className="bg-gray-50">
          <MarketPrice />
        </div>
        <div className="bg-gray-100">
          <AccessToSumbawa />
        </div>
      </main>
      <Footer />
    </div>
  );
}