import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import eyeOnWorldSample from "@/assets/eyeonworld-sample.webp";
import eyeOnWorldLogo from "@/assets/eyeonworld-logo.png";

const samplePrompt = `Looking around, you're standing at the edge of a residential neighborhood where the midday sun beats down on the cobblestones. Selduth Street is just a few paces to your right, a narrow lane that winds its way into the heart of the district. A much larger thoroughfare, The High Road, runs parallel to where you are, its wider path visible between the rooftops and bustling with midday traffic. The area is densely packed with homes and workshops, most standing two or three stories high with timber-framed facades. To your left, a cluster of buildings huddle together, their slate roofs showing signs of recent repair. Straight ahead, the street opens into a small square where you can hear the distant clang of a blacksmith's hammer and the low murmur of conversation from a nearby tavern.`;

const LiveDemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative bg-gradient-to-b from-background to-gaia-darker/30" id="live-demo">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Live Applications
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            See It In Action
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Real-world applications built on GaiaWM — experience narrative perception today.
          </p>
        </motion.div>

        {/* EyeOnWorld Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 border-glow overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={eyeOnWorldLogo} alt="EyeOnWorld logo" className="w-full h-full object-contain" />
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
                transition={{ delay: 0.4, duration: 0.5 }}
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
                transition={{ delay: 0.5, duration: 0.5 }}
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
                  Explore the Forgotten Realms through narrative perception on OpenFantasyMaps. 
                  By clicking on the EyeOnWorld logo on the map, you can define a field of view and get the description of that piece of world.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* More apps coming soon hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-muted-foreground/60 text-sm mt-8"
        >
          More applications coming soon...
        </motion.p>
      </div>
    </section>
  );
};

export default LiveDemoSection;
