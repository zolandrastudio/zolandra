import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
