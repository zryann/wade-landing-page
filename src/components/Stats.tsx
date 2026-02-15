import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "500+", label: "Restaurants" },
  { value: "1M+", label: "Deliveries" },
  { value: "4.9", label: "App Rating" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-secondary">
                {stat.value}
              </div>
              <div className="mt-2 text-primary-foreground/60 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
