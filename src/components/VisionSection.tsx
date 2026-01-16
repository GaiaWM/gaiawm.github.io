import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" id="vision">
      {/* Background element */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gaia-green/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Looking Forward
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-8 text-gradient">
            The Vision
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              We believe the future of AI lies not in bigger models, but in 
              <span className="text-foreground font-medium"> deeper understanding</span>. 
              Systems that don't just process information, but interpret it. 
              Agents that don't just react, but reason.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              GaiaWM is building toward a world where AI systems maintain 
              <span className="text-primary font-medium"> coherent mental models</span>, 
              communicate meaningful beliefs, and navigate complex environments 
              with genuine comprehension.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-foreground font-medium text-xl"
            >
              From fantasy worlds to real-world applications — context is everything.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 p-8 card-gradient rounded-2xl border-glow inline-block"
          >
            <p className="text-muted-foreground italic">
              "Two explorers on Toril exchange insights about a ruined temple. 
              Their shared beliefs construct a richer understanding than either could achieve alone."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
