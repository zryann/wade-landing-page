import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              About WADE
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
              Your city, simplified
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              WADE was born in Erbil with a simple vision: to bring together
              every daily service you need into one elegant experience. Whether
              it&apos;s a late-night craving, a morning commute, or weekly
              groceries — WADE is always just a tap away.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We partner with the best restaurants, trusted drivers, and
              top-quality stores to deliver an unmatched experience every single
              time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
