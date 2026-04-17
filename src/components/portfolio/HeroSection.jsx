import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase, FolderOpen, User } from "lucide-react";
import image from "../../assets/myphoto.jpeg";
import resume from "../../assets/resume.pdf";


// ✅ Replace this with your actual photo URL
const PROFILE_IMAGE_URL = image; // Example: "https://yourdomain.com/path/to/photo.jpg";

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      className="relative flex items-center justify-center"
    >
      {/* Outer spinning gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: 260,
          height: 310,
          background: "conic-gradient(from 0deg, hsl(220 90% 56%), hsl(270 60% 55%), hsl(190 90% 50%), hsl(270 60% 55%), hsl(220 90% 56%))",
          padding: "3px",
          borderRadius: "50%",
        }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </motion.div>

      {/* Inner reverse ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: 276,
          height: 326,
          background: "conic-gradient(from 90deg, transparent 0%, hsl(190 90% 50% / 0.35) 25%, transparent 50%, hsl(270 60% 55% / 0.25) 75%, transparent 100%)",
        }}
      />

      {/* Glow blob */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full bg-primary/25 blur-3xl"
        style={{ width: 180, height: 180 }}
      />

      {/* Photo circle */}
      <div
        className="relative rounded-full overflow-hidden border-4 border-background z-10 shadow-2xl"
        style={{ width: 250, height: 300 }}
      >
        {PROFILE_IMAGE_URL ? (
          <img
            src={PROFILE_IMAGE_URL}
            alt="Noothan Vardhan"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 flex flex-col items-center justify-center gap-2">
            <User className="w-14 h-14 text-primary/80" />
            <span className="text-xs text-muted-foreground font-mono tracking-wide">Your Photo Here</span>
          </div>
        )}
      </div>

      {/* Floating dot accents */}
      <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-2 right-4 w-3 h-3 rounded-full bg-accent/60 blur-sm" />
      <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-4 left-2 w-2 h-2 rounded-full bg-secondary/60 blur-sm" />
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* LEFT — Text & buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
            >
              <span className="text-foreground">Noothan</span>{" "}
              <span className="gradient-text">Vardhan</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-5"
            >
              <span className="text-lg md:text-xl font-mono text-primary glow-text-blue">
                &lt; Full Stack Developer /&gt;
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Building scalable and modern web applications with clean code and elegant design.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-xl glow-blue transition-all duration-300 hover:scale-105 h-auto flex gap-1 items-center"
              >
                
                <Briefcase className="w-4 h-4 mr-2" /> Hire Me
              </button>
              <a
              href={resume}
               download="Vardhan_Resume.pdf"
                variant="outline"
                className="border-border/50 bg-muted/30 hover:bg-muted/50 text-foreground px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm h-auto flex gap-1 items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <button
                variant="ghost"
                onClick={() => scrollTo("#projects")}
                className="text-muted-foreground hover:text-foreground px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 h-auto flex gap-1 items-center"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                View Projects
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT — Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-5 left-[80%] md:bottom-10 md:left-[60%] -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollTo("#about")}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}