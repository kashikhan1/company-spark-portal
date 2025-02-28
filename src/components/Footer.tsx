
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t" role="contentinfo" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground" aria-hidden="true">
            © {new Date().getFullYear()} Ali Square. All rights reserved.
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition-transform"
            onClick={scrollToTop}
            aria-label="Scroll to top of the page"
            tabIndex={0}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
