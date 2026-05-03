import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import port1 from "@assets/d9735add-de4a-46f3-9889-b37da56e13b2_1777798841901.jpeg";
import juicebar from "@assets/8205e6f7-32ce-46c8-b1a4-d94ba79d402b_1777758334003.jpeg";
import salon from "@assets/24a734e8-8c82-4249-bd66-61c92c46342e_1777758668571.jpeg";
import kiosk from "@assets/205733_1777759196987.jpeg";
import valentines from "@assets/4332448d-603e-4788-8671-d49138d0bde6_1777760744192.jpeg";
import boutique from "@assets/f5734a7c-9f1b-4a31-a58c-6a19d4d834d3_1777760909097.jpeg";

type Category = "Todo" | "Dormitorios" | "Salas de estar" | "Espacios pequeños" | "Comerciales";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  badge: "Render 3D" | "Antes & Después";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sala de Estar Airbnb",
    category: "Salas de estar",
    image: port1,
    description: "Ubicada en Asia, se distingue por su diseño en tonos tierra, creando una atmósfera cálida, natural y acogedora. La luz natural, potenciada por grandes ventanales, se fusiona con materiales orgánicos y texturas suaves para transmitir una sensación de calma y armonía al espacio.",
    badge: "Render 3D"
  },
  {
    id: 2,
    title: "Juguería Brunos — Perú",
    category: "Comerciales",
    image: juicebar,
    description: "Se distingue por su diseño fresco y natural, donde la combinación de tonos claros, madera y vegetación crea una atmósfera limpia y acogedora.",
    badge: "Render 3D"
  },
  {
    id: 3,
    title: "Salón de Belleza — Perú",
    category: "Comerciales",
    image: salon,
    description: "Se distingue por su diseño elegante y contemporáneo, donde la combinación de tonos suaves, acabados en mármol y detalles en madera crea una atmósfera sofisticada y acogedora.",
    badge: "Render 3D"
  },
  {
    id: 4,
    title: "Kiosco de Comida Saludable — Jockey Plaza",
    category: "Comerciales",
    image: kiosk,
    description: "Ubicado en Jockey Plaza, se destaca por su diseño moderno y funcional, con una estética urbana que combina estructura metálica, superficies limpias y una fuerte identidad visual de marca.",
    badge: "Render 3D"
  },
  {
    id: 5,
    title: "Café Sweet Valentines",
    category: "Comerciales",
    image: valentines,
    description: "Diseñado para transmitir calidez, dulzura y conexión. El espacio combina una estética delicada con detalles cuidadosamente seleccionados que evocan una atmósfera acogedora y romántica.",
    badge: "Render 3D"
  },
  {
    id: 6,
    title: "Suite Boutique — Airbnb Asia",
    category: "Dormitorios",
    image: boutique,
    description: "Fusiona el minimalismo cálido con acentos contemporáneos, diseñada para viajeros que buscan confort, estilo y una experiencia acogedora. El concepto resalta una paleta de tonos tierra con una pared de acento ocre de textura artesanal que aporta profundidad y calidez.",
    badge: "Render 3D"
  }
];

const categories: Category[] = ["Todo", "Dormitorios", "Salas de estar", "Espacios pequeños", "Comerciales"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todo");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "Todo" || p.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Trabajos Seleccionados</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-10">
            Diseños con propósito
          </h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-transparent text-foreground hover:bg-primary/10"
                }`}
                data-testid={`filter-${category.replace(" ", "-").toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-sm overflow-hidden bg-card cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background border-none font-sans font-normal"
                  >
                    {project.badge}
                  </Badge>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-primary mb-2 font-sans">{project.category}</p>
                  <h4 className="font-serif text-2xl font-medium text-foreground mb-3">{project.title}</h4>
                  <p className="text-foreground/70 font-sans text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
