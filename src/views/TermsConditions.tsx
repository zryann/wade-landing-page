import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";
import { TERMS_CONDITIONS_TEXT } from "@/content/legalText";

const TermsConditions = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary py-6 shadow-md">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/">
            <img src="/logo-light.svg" alt="WADE" className="h-8" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
          Terms & Conditions
        </h1>

        <LegalContent text={TERMS_CONDITIONS_TEXT} />
      </main>
    </div>
  );
};

export default TermsConditions;
