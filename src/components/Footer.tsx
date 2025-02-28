
import { ChevronUp, LinkedinIcon } from 'lucide-react';
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
        <div className="flex space-x-4" aria-label="Social Media Links">
          <a
            href="https://www.linkedin.com/company/ali-square/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ali Square on LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          {/* Add more social media icons here if needed */}
        </div>
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
