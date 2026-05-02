import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor ingresa un correo electrónico válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Simulate API call
    setTimeout(() => {
      toast.success("¡Mensaje enviado con éxito!", {
        description: `Gracias, ${data.name}. Me pondré en contacto contigo pronto.`,
      });
      form.reset();
    }, 500);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Escríbeme</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Creemos tu santuario juntos
            </h3>
            <p className="text-foreground/70 font-sans text-lg mb-12 max-w-md leading-relaxed">
              Ya sea que busques rediseñar toda tu casa o renovar una sola habitación, me encantaría conocer tu proyecto.
            </p>

            <div className="space-y-8 font-sans">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Correo</p>
                <a href="mailto:hola@zolandra.studio" className="text-lg font-medium hover:text-primary transition-colors">
                  hola@zolandra.studio
                </a>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Redes sociales</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/zolandra.studio" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" data-testid="link-instagram-contact">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://tiktok.com/@zolandra6" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" data-testid="link-tiktok-contact">
                    <FaTiktok size={20} />
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" data-testid="link-whatsapp-contact">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 md:p-10 rounded-sm shadow-sm border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans uppercase text-xs tracking-wider">Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" className="bg-background border-border rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans uppercase text-xs tracking-wider">Correo</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@correo.com" className="bg-background border-border rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans uppercase text-xs tracking-wider">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntame sobre tu espacio..." 
                          className="min-h-[150px] bg-background border-border rounded-none focus-visible:ring-primary focus-visible:border-primary resize-none" 
                          {...field} 
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-none bg-foreground hover:bg-primary py-6 text-base mt-4" data-testid="button-submit-contact">
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
