import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="container flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-sm">S</span>
          </div>
          <span className="font-display font-bold text-headline text-xl tracking-tight">
            Super<span className="text-primary">GP</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>

        <a
          href="#"
          className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all"
        >
          Book a Demo
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
