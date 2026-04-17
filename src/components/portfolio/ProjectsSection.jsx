import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "HRMS System",
    description:
      "A full-stack Human Resource Management System developed independently, handling employee lifecycle, attendance, and payroll operations.",
    tags: ["React", "Tailwind CSS", ".NET", "SQL Server", "REST API"],
    highlights: [
      "Independently developed end-to-end application",
      "Role-based authentication using JWT",
      "Employee management & profile system",
      "Attendance tracking & payroll processing",
      "Designed REST APIs and database architecture"
    ],
    gradient: "from-primary/20 to-secondary/20",
    accentColor: "text-primary",
    placeholder: true,
  },
  {
    title: "Automated Certificate Generation System",
    description:
      "A fully automated system built independently to generate certificates dynamically based on user data with a clean and efficient workflow.",
    tags: [".NET", "jquery", "HTML5 Canvas", "Bootstrap"],
    highlights: [
      "Built complete application independently",
      "Dynamic certificate generation",
      "User input-based automation",
      "Downloadable certificate output",
      "Optimized UI for ease of use"
    ],
    gradient: "from-secondary/20 to-accent/20",
    accentColor: "text-secondary",
    placeholder: true,
  },
  {
    title: "Deployed Web Applications",
    description:
      "Collection of multiple responsive websites developed and deployed, focusing on performance, user experience, and real-world usability.",
    tags: ["React",  "Deployment"],
    highlights: [
      "https://warm-custard-73dc5c.netlify.app/",
      "https://atlasenterprisestextile.com/",
      "https://cool-syrniki-0be3d1.netlify.app/",
      "https://malteseshih.com/",
      "https://www.swiftdecktechnologies.com/",
      "https://noothanvardhan.netlify.app/",


    ],
    gradient: "from-accent/20 to-primary/20",
    accentColor: "text-accent",
    placeholder: true,
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Projects" subtitle="Some of my recent work and ongoing developments" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-500"
          >
            {/* Gradient header */}
            <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
             
              {project.placeholder && (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-md">
      <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {project.title}
      </span>
    </div>
  </div>
)}
            </div>

            <div className="p-5">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

             <div className="space-y-2 mb-5">
  {project.highlights.map((h, idx) => (
    <div
      key={idx}
      className="flex items-center gap-2 text-xs text-muted-foreground"
    >
      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />

      {project.title !== "Deployed Web Applications" ? (
        h
      ) : (
        <a
          href={h}
          className="text-primary hover:underline flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {h}
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  ))}
</div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

             
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}