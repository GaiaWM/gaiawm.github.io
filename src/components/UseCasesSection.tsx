import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Gamepad2, Boxes } from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "AI Agent Systems",
    description: "Give your autonomous agents a rich understanding of their environment. They don't just navigate — they comprehend, reason, and adapt.",
  },
  {
    icon: Gamepad2,
    title: "Game Worlds & Interactive Fiction",
    description: "NPCs that understand narrative context. Environments that respond meaningfully. Worlds that feel alive because they actually understand themselves.",
  },
  {
    icon: Boxes,
    title: "Simulation Pipelines",
    description: "Build complex simulations where agents maintain coherent beliefs, share knowledge, and exhibit emergent behavior through meaningful world interaction.",
  },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative bg-gaia-darker/50" id="use-cases">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Applications
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Why It Matters
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            GaiaWM powers the next generation of intelligent systems that need to understand, 
            not just process, their environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary border-glow flex items-center justify-center mx-auto mb-6 group-hover:glow-soft transition-all duration-300">
                <useCase.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
