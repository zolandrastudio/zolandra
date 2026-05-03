import { motion } from "framer-motion";
import blog1 from "@assets/1d46bbcc-1148-437e-953a-d76b3efee9f5_1777799298220.jpeg";
import blog2 from "@assets/blog-2.png";
import blog3 from "@assets/blog-3.png";

const articles = [
  {
    id: 1,
    tag: "Espacios pequeños",
    title: "Cómo hacer que un espacio pequeño se sienta más grande",
    body: "Un espacio pequeño no tiene por qué sentirse limitado. La clave está en la distribución y en cómo permites que el espacio 'respire'. Elige mobiliario proporcional, deja áreas de circulación despejadas y utiliza colores claros o tonos neutros para ampliar visualmente el ambiente. Los espejos también ayudan a reflejar la luz y crear sensación de amplitud. Pequeños cambios pueden transformar por completo cómo percibes tu espacio.",
    image: blog1,
    date: "1 Mayo, 2026"
  },
  {
    id: 2,
    tag: "Materiales naturales",
    title: "La importancia de la iluminación natural",
    body: "La luz natural no solo ilumina, también transforma la energía de un espacio. Un ambiente bien iluminado se percibe más abierto, limpio y acogedor. Evita bloquear las ventanas, usa cortinas ligeras y complementa la luz con materiales naturales que la reflejen suavemente. Diseñar con luz es diseñar con vida.",
    image: blog2,
    date: "3 Marzo, 2026"
  },
  {
    id: 3,
    tag: "Poder de la iluminación",
    title: "Crear espacios que transmitan calma",
    body: "Un espacio armonioso influye directamente en cómo te sientes. Para lograrlo, es importante reducir el exceso visual y elegir los elementos con intención. Incorpora texturas suaves, colores cálidos y materiales naturales. Mantén la decoración simple pero significativa. Un espacio en calma no está sobrecargado, está equilibrado.",
    image: blog3,
    date: "15 Enero, 2025"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Diario de Diseño</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Consejos que debes tener en cuenta para tu espacio
            </h3>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#blog"
            className="font-sans text-sm font-medium uppercase tracking-wider text-primary hover:text-foreground transition-colors pb-1 border-b border-primary hover:border-foreground"
          >
            Ver todos los artículos
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-6 bg-muted">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-muted-foreground text-xs font-sans tracking-widest uppercase">
                    {article.date}
                  </p>
                  <span className="text-xs font-sans text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                    {article.tag}
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-foreground/70 font-sans text-sm leading-relaxed">
                  {article.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
