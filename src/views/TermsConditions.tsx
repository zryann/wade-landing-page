import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LegalContent from "@/components/LegalContent";
import { TERMS_CONDITIONS_TEXT } from "@/content/legalText";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <img src="/logo-light.svg" alt="WADE" className="h-8" />
          </Link>
          <Link
            href="/"
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
