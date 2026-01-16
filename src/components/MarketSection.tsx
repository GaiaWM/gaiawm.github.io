import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$150B+", label: "Global AI market by 2030" },
  { value: "10x", label: "Growth in autonomous agent systems" },
  { value: "∞", label: "Worlds waiting to be understood" },
];

const MarketSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative border-b border-border/50">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              The Opportunity
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
              AI Needs Context to Scale
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
              Current AI systems process data — but they don't <em className="text-foreground">understand</em> environments. 
              As autonomous agents become central to enterprise, gaming, and simulation, 
              the bottleneck isn't compute. It's <span className="text-primary font-medium">contextual intelligence</span>.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="text-center p-8 card-gradient rounded-2xl border-glow"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="font-heading text-xl font-semibold mb-4 text-destructive">
                The Problem
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  AI agents lack persistent, coherent world understanding
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  Multi-agent systems can't share meaningful beliefs
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  Static world models don't capture narrative context
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="font-heading text-xl font-semibold mb-4 text-primary">
                The Solution
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Belief-centric models that evolve with context
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Native multi-agent communication protocols
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Narrative interpretation layer for spatial data
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
