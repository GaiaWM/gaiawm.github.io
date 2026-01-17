import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Gamepad2, Boxes, ExternalLink, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import eyeOnWorldSample from "@/assets/eyeonworld-sample.webp";

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

const samplePrompt = `Looking around, you're standing at the edge of a residential neighborhood where the midday sun beats down on the cobblestones. Selduth Street is just a few paces to your right, a narrow lane that winds its way into the heart of the district. A much larger thoroughfare, The High Road, runs parallel to where you are, its wider path visible between the rooftops and bustling with midday traffic. The area is densely packed with homes and workshops, most standing two or three stories high with timber-framed facades. To your left, a cluster of buildings huddle together, their slate roofs showing signs of recent repair. Straight ahead, the street opens into a small square where you can hear the distant clang of a blacksmith's hammer and the low murmur of conversation from a nearby tavern.`;

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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
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

        {/* EyeOnWorld Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 border-glow overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  GaiaWM EyeOnWorld
                </h3>
                <p className="text-muted-foreground text-sm">
                  See the world through narrative perception
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              EyeOnWorld transforms spatial map data from OpenFantasyMaps into rich, 
              contextual narrative descriptions — giving agents (and players) a sense of 
              place, not just coordinates.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
              >
                <img
                  src={eyeOnWorldSample}
                  alt="EyeOnWorld rendered scene - A medieval fantasy street with timber-framed buildings"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-primary border border-primary/30">
                  Generated from map data
                </div>
              </motion.div>

              {/* Prompt */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-primary font-heading font-semibold text-xs uppercase tracking-widest">
                    Extracted Narrative Prompt
                  </span>
                  <div className="mt-3 bg-gaia-darker rounded-xl p-6 border border-primary/10 max-h-[300px] overflow-y-auto">
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "{samplePrompt}"
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
                >
                  <a
                    href="https://map.fantasymaps.org/toril/1302/16.454892708516/43.604951858138975/-76.7630647653005"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try EyeOnWorld Live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>

                <p className="text-muted-foreground text-xs">
                  Explore the Forgotten Realms through narrative perception on OpenFantasyMaps
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
