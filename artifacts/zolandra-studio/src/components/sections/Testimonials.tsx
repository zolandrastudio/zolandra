import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Zolandra transformó completamente nuestra sala de estar. Pasó de ser un espacio frío y desconectado a convertirse en el corazón cálido y acogedor de nuestro hogar. Su ojo para los materiales naturales no tiene comparación.",
    author: "Sara y Marcos",
    location: "Bogotá, Colombia"
  },
  {
    id: 2,
    quote: "Nunca me había sentido tan en paz en mi propio dormitorio hasta que Zolandra lo rediseñó. Se siente como un hotel boutique, pero totalmente personal. La calma intencional que crea es real.",
    author: "Elena Rodríguez",
    location: "Ciudad de México, México"
  },
  {
    id: 3,
    quote: "Trabajar con Zolandra fue un sueño. Escuchó nuestras necesidades y creó un diseño funcional que por fin hace que nuestro pequeño apartamento respire.",
    author: "David Chávez",
    location: "Buenos Aires, Argentina"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-primary/5 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Historias de Clientes</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Palabras de calidez
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background p-8 rounded-sm shadow-sm relative"
            >
              <div className="text-primary text-6xl font-serif absolute -top-4 left-6 opacity-20">"</div>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground/90 mb-8 relative z-10">
                {t.quote}
              </p>
              <div>
                <p className="font-sans font-medium text-foreground text-sm uppercase tracking-wide">
                  {t.author}
                </p>
                <p className="font-sans text-muted-foreground text-sm">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
