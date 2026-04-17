import { motion } from "framer-motion";
import { Globe, Layers, Plug, Palette } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building fast, responsive, and modern websites using the latest technologies and best practices.",
    color: "text-primary",
    glow: "group-hover:shadow-primary/20",
  },
  {
    icon: Layers,
    title: "Full Stack Apps",
    description: "End-to-end application development from frontend UI to backend APIs and database design.",
    color: "text-secondary",
    glow: "group-hover:shadow-secondary/20",
  },
  {
    icon: Plug,
    title: "API Development",
    description: "Designing and building robust REST APIs with proper authentication, validation, and documentation.",
    color: "text-accent",
    glow: "group-hover:shadow-accent/20",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Translating design mockups into pixel-perfect, interactive, and accessible user interfaces.",
    color: "text-primary",
    glow: "group-hover:shadow-primary/20",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading title="Services" subtitle="What I can do for you" />

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass-card rounded-2xl p-6 md:p-8 group cursor-default hover:border-primary/20 transition-all duration-500 hover:shadow-xl ${service.glow}`}
          >
            <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className={`w-6 h-6 ${service.color}`} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}