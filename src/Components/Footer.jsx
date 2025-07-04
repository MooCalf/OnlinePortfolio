import { ArrowUp } from "lucide-react";
import { useCallback } from "react";

export const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} MooCalf. All rights reserved.
      </p>
      <button
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
