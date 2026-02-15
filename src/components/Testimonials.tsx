import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sara A.",
    role: "Food Lover",
    text: "WADE changed how I order food. The app is beautiful and delivery is incredibly fast!",
    rating: 5,
  },
  {
    name: "Mohammed K.",
    role: "Daily Commuter",
    text: "I use WADE Taxi every morning. Clean cars, polite drivers, and always on time.",
    rating: 5,
  },
  {
    name: "Layla H.",
    role: "Busy Mom",
    text: "Market delivery is a lifesaver. Fresh groceries at my door in under an hour.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
            Loved by thousands
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
