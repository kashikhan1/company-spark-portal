
import { ChevronUp, LinkedinIcon, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactInfo = {
    email: import.meta.env.VITE_PUBLIC_TO_EMAIL,
    address:
      "Interlace Plaza 4th floor, Twinhub I-8 Markaz, Islamabad, Pakistan",
  };
  
  return (
    <footer
      className="bg-background border-t"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Media Links */}
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

          {/* Company Contact Information */}
          <div className="text-sm text-muted-foreground flex-2 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex flex-row gap-2 items-center">
              <MapPin className="w-4 h-4" />
              <address>{contactInfo.address}</address>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-primary"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Scroll to Top Button */}
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

        <hr />
        {/* Copyright Notice */}
        <div className="text-center text-muted-foreground">
          {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
