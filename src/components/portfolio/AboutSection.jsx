import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Zap, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React & Modern UI", color: "text-primary" },
  { icon: Server, label: "Backend", desc: ".NET & Node.js", color: "text-secondary" },
  { icon: Database, label: "Database", desc: "PostgreSQL & SQL", color: "text-accent" },
  { icon: Wrench, label: "Tools", desc: "Git, VS Code, Postman", color: "text-primary" },
  { icon: Zap, label: "Performance", desc: "Optimized & Fast", color: "text-secondary" },
  { icon: Users, label: "Team Player", desc: "Collaborative", color: "text-accent" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" subtitle="Get to know me and what I bring to the table" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Full Stack Developer with 1 year of hands-on experience in building scalable web applications
            using <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">.NET</span>, and modern web technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            Passionate about creating clean, efficient, and user-friendly solutions. I love transforming
            complex problems into simple, beautiful, and intuitive designs.
          </p>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-xs text-muted-foreground mt-1">Years Exp.</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-xs text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-xs text-muted-foreground mt-1">Technologies</div>
            </div>
          </div>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-card rounded-xl p-4 text-center cursor-default group hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-sm font-semibold text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}