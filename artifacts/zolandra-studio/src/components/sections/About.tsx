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
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Sobre mí</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Diseñando para la vida, <br /> no solo para lucir.
            </h3>
            
            <div className="flex flex-col gap-6 text-foreground/80 font-sans text-lg leading-relaxed">
              <p>
                Hola, soy Zolandra. Creo que nuestros espacios moldean profundamente cómo nos sentimos, pensamos y vivimos. Mi enfoque del diseño de interiores se basa en la filosofía de que un hogar debe ser tu santuario: un lugar de calma intencional.
              </p>
              <p>
                Cada proyecto que emprendo es profundamente personal. No creo showrooms rígidos; construyo hogares reales llenos de luz, materiales naturales y espacio para respirar. Combino tonos cálidos y terrosos con texturas orgánicas para crear ambientes que se sienten pausados y táctiles.
              </p>
              <p>
                Ya sea un loft soleado o un rincón acogedor de lectura, mi objetivo siempre es el mismo: diseñar espacios con confianza tranquila en los que simplemente quieras quedarte.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex items-center gap-8">
              <div>
                <p className="font-serif text-4xl text-primary mb-1">10+</p>
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary mb-1">50+</p>
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Proyectos completados</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
