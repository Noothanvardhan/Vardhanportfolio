import { useState } from "react";
import { motion } from "framer-motion";
import { Send,  Mail, MapPin, Phone } from "lucide-react";
import { FaGithub , FaLinkedin } from "react-icons/fa";

import toast from "react-hot-toast";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Noothanvardhan" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/noothan-vardhan-peethala-108543251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill in all fields");
    return;
  }

  setSending(true);

  const formData = new FormData(e.target);
  formData.append("access_key", "6c71b8a2-8017-4704-b743-1a77eb6da3f4");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Something went wrong!");
  }

  setSending(false);
};
  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Get in Touch" subtitle="Have a project in mind? Let's work together!" />

      <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Let's Connect</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span>panduvardhan@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-secondary" />
              </div>
              <span>India</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span>9346244741</span>
            </div>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
            <div>
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-muted/30 border-border/50 focus:border-primary/50 h-12 rounded-xl text-sm placeholder:text-muted-foreground/50  w-full placeholder:px-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-muted/30 border-border/50 focus:border-primary/50 h-12 rounded-xl text-sm placeholder:text-muted-foreground/50 w-full placeholder:px-2"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-muted/30 border-border/50 focus:border-primary/50 rounded-xl text-sm placeholder:text-muted-foreground/50 resize-none w-full placeholder:px-2 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-12 rounded-xl glow-blue transition-all duration-300 hover:scale-[1.02]"
            >
              {sending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin " />
              ) : (
                <div className="flex items-center justify-center gap-1">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </div>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}