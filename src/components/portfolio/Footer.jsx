import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">Noothan Vardhan</span>. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
}