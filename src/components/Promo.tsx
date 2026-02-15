import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const Promo = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, hsl(207, 100%, 14%) 0%, hsl(207, 80%, 22%) 50%, hsl(193, 60%, 35%) 100%)",
          }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Gift size={16} />
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                Get 50% off your first order
              </h2>
              <p className="mt-4 text-primary-foreground/70 text-lg max-w-lg">
                New to WADE? Download the app and use code{" "}
                <span className="font-semibold text-secondary">WADE50</span> at
                checkout for an exclusive welcome discount.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#download"
                className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/30"
              >
                Claim Offer
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promo;
