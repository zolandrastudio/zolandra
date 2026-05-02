import { motion } from "framer-motion";
import { Cuboid, Grid2X2, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    id: "3d-design",
    title: "Diseño 3D y Visualización",
    icon: <Cuboid className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />,
    description: "Experimenta tu nuevo espacio antes de comenzar la construcción. Renders 3D fotorrealistas de alta calidad que capturan la luz, la textura y el flujo.",
    price: "Desde $800 / habitación"
  },
  {
    id: "space-planning",
    title: "Planificación de Espacios",
    icon: <Grid2X2 className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />,
    description: "Optimización del diseño de tu hogar para máxima funcionalidad y espacio para respirar. Enfoque en el flujo natural y la calma intencional.",
    price: "Desde $400 / habitación"
  },
  {
    id: "interior-styling",
    title: "Estilismo de Interiores",
    icon: <Paintbrush className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />,
    description: "La capa final. Selección de muebles, textiles, arte y materiales naturales para crear un entorno profundamente personal y táctil.",
    price: "Cotización personalizada"
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
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Mi Enfoque</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Servicios adaptados a tu hogar
            </h3>
            <p className="text-foreground/70 font-sans text-lg">
              Soluciones de diseño integrales que transforman casas en santuarios cálidos y habitables.
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
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="bg-card border-none shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col rounded-sm">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-serif text-2xl font-medium">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="font-sans text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <p className="mt-6 font-sans font-medium text-primary tracking-wide text-sm uppercase">
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
