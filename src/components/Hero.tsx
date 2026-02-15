import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const screenSplash = "/screen-splash.png";
const screenHome = "/screen-home.png";
const screenSearch = "/screen-search.png";

const PhoneMockup = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="relative aspect-[9/19.5] overflow-hidden rounded-[clamp(1.05rem,5.3vw,2.5rem)] border-[clamp(2px,0.75vw,6px)] border-foreground/80 bg-foreground/80 shadow-2xl shadow-black/30">
      <div className="absolute top-0 left-1/2 z-10 h-[clamp(9px,3.1vw,22px)] w-[clamp(30%,34%,35%)] -translate-x-1/2 rounded-b-[clamp(7px,2.2vw,14px)] bg-foreground/80" />
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" loading="eager" />
    </div>
  </div>
);

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

        {/* Hero Mockup - Three Phones */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-14 flex w-full max-w-4xl items-end justify-center gap-0 px-2 sm:mt-16 sm:px-0 sm:gap-4 md:gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -6 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-[clamp(76px,29vw,220px)] -mr-[clamp(6px,2.6vw,22px)] translate-y-2 sm:mr-0 sm:translate-y-0"
          >
            <PhoneMockup src={screenSplash} alt="WADE Splash Screen" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="z-10 w-[clamp(108px,38vw,280px)] animate-float"
          >
            <PhoneMockup src={screenHome} alt="WADE Home Screen" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-[clamp(76px,29vw,220px)] -ml-[clamp(6px,2.6vw,22px)] translate-y-2 sm:ml-0 sm:translate-y-0"
          >
            <PhoneMockup src={screenSearch} alt="WADE Search Screen" />
          </motion.div>
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
