import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-background/10 pb-12">
          
          <div>
            <h2 className="font-serif text-3xl font-medium mb-4 text-background">Zolandra Studio</h2>
            <p className="text-background/70 max-w-sm font-sans leading-relaxed mb-6">
              Creating comfortable, aesthetic, and deeply livable spaces filled with light, natural materials, and intentional calm.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/zolandra.studio" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all" data-testid="link-instagram-footer">
                <FaInstagram size={18} />
              </a>
              <a href="https://tiktok.com/@zolandra6" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all" data-testid="link-tiktok-footer">
                <FaTiktok size={18} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all" data-testid="link-whatsapp-footer">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-background">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {['About', 'Portfolio', 'Services', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => handleScrollTo(e, `#${item.toLowerCase()}`)}
                    className="text-background/70 hover:text-primary transition-colors text-sm uppercase tracking-wider"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-background">Contact</h3>
            <ul className="flex flex-col gap-3 text-background/70 font-sans">
              <li>hola@zolandra.studio</li>
              <li>Available worldwide for remote styling.</li>
              <li>Based in warmth and elegance.</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-background/50 text-xs tracking-wider uppercase font-sans">
          <p>&copy; {currentYear} Zolandra Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
