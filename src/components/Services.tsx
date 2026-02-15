import { motion } from "framer-motion";
import { UtensilsCrossed, Car, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Food",
    description:
      "Discover restaurants near you and get your favourite meals delivered in minutes.",
    stat: "500+ Restaurants",
  },
  {
    icon: Car,
    title: "Taxi",
    description:
      "Book a ride instantly with reliable drivers. Comfortable, safe, and always on time.",
    stat: "24/7 Available",
  },
  {
    icon: ShoppingCart,
    title: "Market",
    description:
      "Shop groceries, essentials, and more from top local stores — delivered to your door.",
    stat: "1000+ Products",
  },
];

const cardVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 8px 32px hsl(207 100% 14% / 0.08)",
  },
  hover: {
    scale: 1.03,
    boxShadow:
      "0 0 40px hsl(193 46% 50% / 0.35), 0 0 80px hsl(193 46% 50% / 0.1), 0 16px 48px hsl(207 100% 14% / 0.14)",
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
            Three services, one app
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Whatever you need, WADE has you covered with premium quality and
            lightning-fast delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-card rounded-2xl p-8 border border-border cursor-pointer overflow-hidden"
            >
              {/* Glow overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, hsl(193 46% 50% / 0.08), transparent 70%)",
                }}
              />

              <motion.div
                variants={iconVariants}
                className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 relative z-10"
              >
                <service.icon className="w-7 h-7 text-secondary" />
              </motion.div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>
              <span className="text-secondary font-semibold text-sm relative z-10">
                {service.stat}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
