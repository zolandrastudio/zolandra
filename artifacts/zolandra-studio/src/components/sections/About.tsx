import { motion } from "framer-motion";
import portraitImg from "@assets/zolandra-portrait.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img 
                src={portraitImg} 
                alt="Zolandra, Interior Designer" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-full -z-10 opacity-50 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">About Me</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Designing for life, <br /> not just for show.
            </h3>
            
            <div className="flex flex-col gap-6 text-foreground/80 font-sans text-lg leading-relaxed">
              <p>
                Hello, I'm Zolandra. I believe that our spaces profoundly shape how we feel, think, and live. My approach to interior design is rooted in the philosophy that a home should be your sanctuary—a place of intentional calm.
              </p>
              <p>
                Every project I take on is deeply personal. I don't create rigid showrooms; I craft real homes filled with light, natural materials, and breathing space. I blend warm, earthy tones with organic textures to create environments that feel unhurried and tactile.
              </p>
              <p>
                Whether it's a sunlit loft or a cozy reading nook, my goal is always the same: to design spaces with quiet confidence that you simply want to stay in.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex items-center gap-8">
              <div>
                <p className="font-serif text-4xl text-primary mb-1">10+</p>
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary mb-1">50+</p>
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Projects Completed</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
