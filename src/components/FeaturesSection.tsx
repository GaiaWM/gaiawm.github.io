import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Sparkles, Zap, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Contextual Perception",
    description: "Agents receive narrative summaries of their surroundings — not raw data dumps, but meaningful interpretations shaped by their current context and goals.",
  },
  {
    icon: Sparkles,
    title: "Narrative Interpretation",
    description: "Spatial data transforms into story. A forest isn't just trees; it's a mysterious canopy that hides ancient ruins and whispers of old magic.",
  },
  {
    icon: Zap,
    title: "Affordance-Driven Action",
    description: "What an agent can do depends on context. A locked door means nothing until you know you're being chased — then it becomes the most important object in the world.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Agent Communication",
    description: "Agents share beliefs, negotiate meaning, and build shared understanding. Two explorers on Toril exchange insights and construct collective knowledge.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" id="features">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gaia-green/5 blur-3xl" />

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Core Concepts
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Key Features
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group card-gradient rounded-2xl p-8 border-glow hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
