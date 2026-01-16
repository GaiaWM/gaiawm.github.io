import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Building2, Gamepad2, Globe } from "lucide-react";

const applications = [
  {
    icon: Building2,
    title: "Enterprise AI Agents",
    description: "Autonomous systems that understand business context, maintain coherent goals, and collaborate meaningfully.",
    market: "Enterprise AI",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Metaverse",
    description: "NPCs with genuine understanding. Procedural worlds that are narratively coherent. Player experiences that adapt.",
    market: "$200B+ Gaming",
  },
  {
    icon: Globe,
    title: "Simulation & Digital Twins",
    description: "Complex system modeling where agents reason about their environment, not just react to inputs.",
    market: "Industrial AI",
  },
  {
    icon: TrendingUp,
    title: "Research & Development",
    description: "Foundation for next-generation cognitive architectures and embodied AI research.",
    market: "R&D",
  },
];

const CommercialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative bg-gaia-darker/30" id="commercial">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              Commercial Applications
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
              Where Context Creates Value
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              GaiaWM's contextual world model architecture unlocks new capabilities 
              across high-growth markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="group p-6 card-gradient rounded-2xl border-glow hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <app.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
                  {app.market}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {app.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialSection;
