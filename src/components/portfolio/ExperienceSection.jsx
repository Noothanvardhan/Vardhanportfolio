import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const responsibilities = [
  "Developed responsive web applications using React.js",
  "Built REST APIs using Node.js and .NET",
  "Designed and managed databases using PostgreSQL / SQL Server",
  "Implemented authentication using JWT",
  "Integrated frontend with backend APIs",
  "Debugged and optimized performance of applications",
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" subtitle="My professional journey and accomplishments" />

      <div className="max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 md:pl-20"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary glow-blue flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-background" />
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-all duration-500 group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Full Stack Developer
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">1 Year of Professional Experience</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Current
                </span>
              </div>

              <div className="space-y-3">
                {responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}