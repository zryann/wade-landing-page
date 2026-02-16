import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Promo from "@/components/Promo";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const previousPath = useRef<string>("");

  useEffect(() => {
    // Check if previous page was privacy or terms
    const fromLegalPage = previousPath.current === "/privacy" || previousPath.current === "/terms";
    
    if (fromLegalPage) {
      // Scroll to top when coming from privacy or terms pages
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    
    // Update previous path for next navigation
    return () => {
      previousPath.current = location.pathname;
    };
  }, [location.pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Promo />
        <Stats />
        <About />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
