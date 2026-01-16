import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const InvestorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" id="investors">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gaia-darker/50 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-gaia-green/10 blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gaia-green/10 blur-3xl translate-x-1/2" />

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              For Investors
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
              Partner With Us
            </h2>
          </div>

          <div className="card-gradient rounded-3xl p-8 md:p-12 border-glow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                  Building the Infrastructure for Contextual AI
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  GaiaWM is positioned at the intersection of world models, 
                  multi-agent systems, and narrative AI — a foundational layer 
                  for the next generation of intelligent applications.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Open-source foundation with commercial licensing potential
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Novel IP in contextual perception and belief systems
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Growing developer community and research partnerships
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Clear path to enterprise and gaming verticals
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-block p-8 rounded-2xl bg-secondary/50 border border-border">
                  <p className="text-muted-foreground text-sm mb-4">
                    Interested in learning more about GaiaWM's vision and roadmap?
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full glow-green group"
                    asChild
                  >
                    <a href="mailto:contact@gaiawm.dev">
                      <Mail className="mr-2 h-5 w-5" />
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-xs mt-4">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
