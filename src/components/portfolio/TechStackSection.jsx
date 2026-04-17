import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import TechBoyModel from "./TechBoyModel";

const categories = [
  {
    title: "Frontend",
    color: "from-primary to-blue-400",
    borderColor: "hover:border-primary/30",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    title: "Backend",
    color: "from-secondary to-purple-400",
    borderColor: "hover:border-secondary/30",
    techs: [
      { name: "Node.js", icon: "🟩" },
      { name: ".NET", icon: "🔷" },
    ],
  },
  {
    title: "Database",
    color: "from-accent to-cyan-400",
    borderColor: "hover:border-accent/30",
    techs: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQL Server", icon: "🗄️" },
    ],
  },
  {
    title: "Tools",
    color: "from-primary via-secondary to-accent",
    borderColor: "hover:border-primary/30",
    techs: [
      { name: "Git", icon: "🔀" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <SectionWrapper id="techstack">
      <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with daily" />

      {/* Boy + cards layout */}
      <div className="grid lg:grid-cols-5 gap-8 items-center mb-6">
        {/* 3D Animated Boy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 flex items-center justify-center"
        >
          <div className="glass-card rounded-3xl p-4 border border-primary/10 hover:border-primary/25 transition-all duration-500 w-full max-w-xs mx-auto">
            <TechBoyModel />
          </div>
        </motion.div>

        {/* Tech cards grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl p-5 transition-all duration-500 ${cat.borderColor}`}
            >
              <div className={`text-sm font-semibold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-4 uppercase tracking-wider`}>
                {cat.title}
              </div>
              <div className="space-y-2.5">
                {cat.techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors duration-300 group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </SectionWrapper>
  );
}