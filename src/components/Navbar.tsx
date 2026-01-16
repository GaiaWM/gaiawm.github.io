import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-sm">G</span>
            </div>
            <span className="font-heading font-semibold text-lg">GaiaWM</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#commercial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Applications
            </a>
            <a href="#investors" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
              Investors
            </a>
          </div>

          {/* CTA */}
          <Button variant="outline" size="sm" className="border-border" asChild>
            <a href="https://github.com/gaiawm" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
