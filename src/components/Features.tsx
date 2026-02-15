import { motion } from "framer-motion";
import { Zap, Shield, Clock, MapPin, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Average delivery in under 30 minutes across all services.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "End-to-end encrypted payments and verified drivers.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Track your order or ride live on an interactive map.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Available across Erbil with expanding coverage areas.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Pay by card, cash, or WADE wallet — your choice.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Why WADE
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
            Built for your lifestyle
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-card hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                <f.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
