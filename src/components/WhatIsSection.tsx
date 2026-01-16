import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatIsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" id="about">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              Beyond Static Maps
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
              What is GaiaWM?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional world models are static representations — coordinates, 
                geometries, and fixed data points. They tell you <em className="text-foreground">where</em> things are, 
                but not <em className="text-foreground">what they mean</em>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GaiaWM takes a fundamentally different approach. It treats world 
                models as <span className="text-primary font-semibold">belief-centric understanding engines</span> — 
                where agents maintain partial, contextual views of their environment 
                and derive meaning from narrative interpretation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="card-gradient rounded-2xl p-8 border-glow"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    <strong>Partial Observability</strong> — agents see only what's contextually relevant
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    <strong>Narrative Context</strong> — spatial data becomes story, not just structure
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    <strong>Meaningful Action</strong> — affordances emerge from context, not catalogs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
