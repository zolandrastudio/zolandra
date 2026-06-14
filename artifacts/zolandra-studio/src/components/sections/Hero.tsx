import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@assets/portfolio-5.png";
import { Button } from "@/components/ui/button";

function handleScrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-[100dvh] w-full overflow-hidden bg-muted flex items-center"
    >
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src={heroImg} 
          alt="Warm elegant living space" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-white/80 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6 font-medium">
            Zolandra Studio
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-medium tracking-tight">
            Cada espacio que diseñamos <br className="hidden md:block" />
            está hecho para convertirse <br className="hidden md:block" />
            en una <span className="italic font-light">experiencia</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-sans max-w-xl leading-relaxed mb-10 font-light">
            Diseño intencional en la intersección de la calidez y la elegancia. 
            Creamos interiores naturales, frescos y funcionales que respiran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg" 
              className="rounded-full bg-white text-foreground hover:bg-primary hover:text-white border-0 px-8 py-6 text-base shadow-lg transition-all duration-500"
              data-testid="button-hero-portfolio"
            >
              <a href="#portfolio" onClick={(e) => handleScrollTo(e, "#portfolio")}>
                Ver Portafolio
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="rounded-full border-white/40 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base backdrop-blur-sm transition-all duration-500"
              data-testid="button-hero-contact"
            >
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                Reservar Consulta
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest font-sans">Desliza</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
