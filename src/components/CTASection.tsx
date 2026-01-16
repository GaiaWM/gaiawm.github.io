import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, BookOpen, Users } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gaia-darker via-background to-background" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gaia-green/10 blur-3xl" />

      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Start Building Meaningful Worlds
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Explore the code, dive into examples, or join a community of researchers 
            and developers reimagining how intelligent systems understand their environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="glow-green text-lg px-8 py-6"
              asChild
            >
              <a href="https://github.com/gaiawm" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Explore the Code
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
              asChild
            >
              <a href="https://github.com/gaiawm" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-5 w-5" />
                Read the Docs
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
              asChild
            >
              <a href="https://github.com/gaiawm" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
