import { Link } from "react-router-dom";
import logoLight from "@/assets/logo-light.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={logoLight} alt="WADE" className="h-8 mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your all-in-one delivery platform for Food, Taxi, and Market
              services.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 text-sm tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {["Food Delivery", "Taxi Booking", "Market Shopping"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 text-sm tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Features", href: "#features" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 text-sm tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} WADE. All rights reserved.
          </p>
          <a
            href="mailto:info@wadedelivery.com"
            className="text-primary-foreground/40 hover:text-secondary text-sm transition-colors"
          >
            info@wadedelivery.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
