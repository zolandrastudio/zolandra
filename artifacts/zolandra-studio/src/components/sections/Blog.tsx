import { motion } from "framer-motion";
import blog1 from "@assets/blog-1.png";
import blog2 from "@assets/blog-2.png";
import blog3 from "@assets/blog-3.png";

const articles = [
  {
    id: 1,
    title: "How to Make a Small Room Feel Larger",
    excerpt: "Clever layout adjustments, mirror placements, and color palette choices to maximize your breathing space.",
    image: blog1,
    date: "Oct 12, 2023"
  },
  {
    id: 2,
    title: "Choosing Natural Materials for Your Home",
    excerpt: "Why wood grain, linen, and stone textures are essential for creating an unhurried, tactile environment.",
    image: blog2,
    date: "Nov 05, 2023"
  },
  {
    id: 3,
    title: "The Power of Lighting in Interior Design",
    excerpt: "Layering ambient, task, and accent lighting to create a warm, inviting glow that shifts with the time of day.",
    image: blog3,
    date: "Jan 18, 2024"
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
            <h2 className="font-sans text-sm tracking-widest text-primary uppercase mb-4">Design Journal</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
              Tips for a livable space
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
            View all articles
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
                <p className="text-muted-foreground text-xs font-sans tracking-widest uppercase mb-3">
                  {article.date}
                </p>
                <h4 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-foreground/70 font-sans text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-primary text-sm font-sans font-medium hover:underline underline-offset-4">
                  Read more
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
