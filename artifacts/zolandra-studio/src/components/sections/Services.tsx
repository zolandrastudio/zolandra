import { motion } from "framer-motion";
import { Cuboid, Grid2X2, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  includes: string[];
  price: string;
}

const services: Service[] = [
  {
    id: "3d-design",
    title: "Diseño y Planificación",
    icon: <Cuboid className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />,
    description: "Visualiza tu espacio antes de hacerlo realidad. Creamos renders fotorrealistas que transmiten la esencia, la luz y la atmósfera del diseño.",
    includes: [
      "Modelado 3D del espacio",
      "1–2 renders fotorrealistas",
      "1 plano de distribución básico",
      "Ajustes según retroalimentación",
    ],
    price: "Desde $180 / $220 por espacio"
  },
  {
    id: "space-planning",
    title: "Planificación de Espacios",
    icon: <Grid2X2 className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />,
    description: "Optimización de la distribución para lograr ambientes funcionales, cómodos y adaptados a tu estilo de vida.",
    includes: [
      "Análisis del espacio",
      "Distribución funcional (plano 2D)",
      "Zonificación y circulación",
      "Moodboard (referencia visual)",
      "Ajuste según retroalimentación",
    ],
    price: "Desde $100 / $150 por espacio"
  },
  {
    id: "interior-styling",
    title: "Estilismo de Interiores",
    icon: <Paintbrush className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />,
    description: "Sesión personalizada donde te ayudo a mejorar tu espacio con recomendaciones prácticas, estéticas y funcionales.",
    includes: [
      "Revisión del espacio (fotos o videollamada)",
      "Recomendación de estilo y concepto",
      "Paleta de colores",
      "Ideas de muebles y decoración",
      "Sugerencias de distribución (sin plano técnico)",
      "Preguntas y respuestas en tiempo real",
    ],
    price: "Desde $35 / $60 por sesión"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Nuestros Servicios</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Servicios adaptados a tu hogar
            </h3>
            <p className="text-foreground/70 font-sans text-lg">
              Soluciones de diseño creadas para transformar tu hogar en un espacio funcional, estético y armonioso.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full">
              <Card className="bg-card border-none shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col rounded-sm">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-serif text-2xl font-medium">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-6">
                  <p className="font-sans text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Incluye</p>
                    <ul className="flex flex-col gap-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground/70">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-sans font-medium text-primary tracking-wide text-sm uppercase mt-auto">
                    {service.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground font-sans transition-colors"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    data-testid={`button-service-${service.id}`}
                  >
                    Solicitar Cotización
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover:bg-primary px-8 py-6 text-base"
            onClick={(e) => handleScrollTo(e, "#contact")}
            data-testid="button-schedule-consultation"
          >
            Agendar una Consulta
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
