import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(207, 100%, 14%) 0%, hsl(193, 80%, 63%) 35.28%, hsl(0, 0%, 100%) 97.9%)",
      }}
    >
      <div className="container mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-secondary/20 text-primary-foreground border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Food • Taxi • Market — All in one app
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground max-w-4xl leading-tight"
        >
          Everything you need,{" "}
          <span className="text-gradient">delivered</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl"
        >
          Order food, book a taxi, or shop your favourite market — all from one
          beautifully simple app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#download"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/30"
          >
            Download Now
          </a>
          <a
            href="#services"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-16 w-full max-w-5xl"
        >
          <img
            src={heroMockup}
            alt="WADE App screens showcasing Food, Taxi, and Market services"
            className="w-full rounded-2xl animate-float"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="text-foreground/40 hover:text-foreground/60 transition-colors">
          <ArrowDown className="animate-bounce" size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
