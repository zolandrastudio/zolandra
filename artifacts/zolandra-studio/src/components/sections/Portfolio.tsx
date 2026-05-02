import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import port1 from "@assets/portfolio-1.png";
import port2 from "@assets/portfolio-2.png";
import port3 from "@assets/portfolio-3.png";
import port4 from "@assets/portfolio-4.png";
import port5 from "@assets/portfolio-5.png";
import port6 from "@assets/portfolio-6.png";

type Category = "All" | "Bedrooms" | "Living Rooms" | "Small Spaces";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  badge: "3D Render" | "Before & After";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Warm Minimalist Haven",
    category: "Bedrooms",
    image: port1,
    description: "A serene bedroom featuring linen curtains, earthy tones, and abundant natural light.",
    badge: "3D Render"
  },
  {
    id: 2,
    title: "Earthy Open Living",
    category: "Living Rooms",
    image: port2,
    description: "An airy living room anchored by a warm wood table and olive green organic textures.",
    badge: "Before & After"
  },
  {
    id: 3,
    title: "Cozy Reading Nook",
    category: "Small Spaces",
    image: port3,
    description: "Intentional calm in a small footprint, with natural materials and thoughtful lighting.",
    badge: "3D Render"
  },
  {
    id: 4,
    title: "Serene Master Suite",
    category: "Bedrooms",
    image: port4,
    description: "Neutral tones and soft bedding combined in an organic modern aesthetic.",
    badge: "Before & After"
  },
  {
    id: 5,
    title: "Functional Stone Living",
    category: "Living Rooms",
    image: port5,
    description: "Open plan living area utilizing warm stone colors and elegant, practical furniture.",
    badge: "3D Render"
  },
  {
    id: 6,
    title: "Sunlit Loft Studio",
    category: "Small Spaces",
    image: port6,
    description: "An unhurried vibe with tactile materials and quiet confidence for a creative workspace.",
    badge: "3D Render"
  }
];

const categories: Category[] = ["All", "Bedrooms", "Living Rooms", "Small Spaces"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
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
          <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Selected Work</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-10">
            Spaces designed for living
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
