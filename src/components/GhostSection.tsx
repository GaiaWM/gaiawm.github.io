import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Monitor, Github, ExternalLink, Download } from "lucide-react";

const GhostSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" id="ghosts">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
            Now shipping
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Own a Ghost
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            The first GaiaWM products are live. Adopt an embodied agent in a shared
            persistent world — imprint who it is and what it wants, then power its
            mind with your own models. <span className="text-foreground">The world is
            shared; the mind is private.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* ghostkit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl bg-secondary border-glow p-8 flex flex-col"
          >
            <div className="w-14 h-14 rounded-xl bg-background border-glow flex items-center justify-center mb-6">
              <Terminal className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-3">ghostkit</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Python library + CLI. Declare a folder of ghosts — souls, goals, and
              the engines that think for them — and run their minds on your own
              keys (BYOK: they never leave your machine). Every belief each ghost
              forms is calibration-scored against the world.
            </p>
            <code className="block text-sm text-primary bg-background rounded-lg px-4 py-3 mb-6 font-mono">
              pip install ghostkit
            </code>
            <div className="flex gap-3 mt-auto">
              <Button variant="outline" size="sm" className="border-border" asChild>
                <a href="https://gaiawm.github.io/ghostkit/">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn more
                </a>
              </Button>
              <Button variant="outline" size="sm" className="border-border" asChild>
                <a href="https://github.com/GaiaWM/ghostkit" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </a>
              </Button>
            </div>
          </motion.div>

          {/* GhostDeck */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="rounded-2xl bg-secondary border-glow p-8 flex flex-col"
          >
            <div className="w-14 h-14 rounded-xl bg-background border-glow flex items-center justify-center mb-6">
              <Monitor className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-3">GhostDeck</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The desktop deck for the ghosts you own: roster, vitals, memories, a
              live map of everyone wandering the world, and chat they remember.
              Run a ghost's mind on your local Ollama — no model, key, or prompt
              ever touches the server.
            </p>
            <p className="text-sm text-muted-foreground mb-6 font-mono">
              Windows · macOS (universal) · Linux
            </p>
            <div className="flex gap-3 mt-auto">
              <Button variant="outline" size="sm" className="border-border" asChild>
                <a href="https://github.com/GaiaWM/ghostdeck/releases/latest" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
              <Button variant="outline" size="sm" className="border-border" asChild>
                <a href="https://gaiawm.github.io/ghostdeck/">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn more
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GhostSection;
