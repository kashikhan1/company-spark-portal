
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "service.website.title",
      descriptionKey: "service.website.description",
      featuresKeys: [
        "service.website.feature1", 
        "service.website.feature2", 
        "service.website.feature3"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      titleKey: "service.startup.title",
      descriptionKey: "service.startup.description",
      featuresKeys: [
        "service.startup.feature1", 
        "service.startup.feature2", 
        "service.startup.feature3"
      ],
      image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5",
    },
    {
      titleKey: "service.consultation.title",
      descriptionKey: "service.consultation.description",
      featuresKeys: [
        "service.consultation.feature1", 
        "service.consultation.feature2", 
        "service.consultation.feature3"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      titleKey: "service.branding.title",
      descriptionKey: "service.branding.description",
      featuresKeys: [
        "service.branding.feature1", 
        "service.branding.feature2", 
        "service.branding.feature3"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      const currentScroll = sliderRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm md:text-md font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4 select-none">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div
            ref={sliderRef}
            className="flex space-x-6 px-4 py-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card flex-none w-[300px] md:w-[350px] snap-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(service.descriptionKey)}
                  </p>
                  <ul className="space-y-3">
                    {service.featuresKeys.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Left Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-background z-10"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            tabIndex={0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Right Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-background z-10"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            tabIndex={0}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Bottom Gradient Indicator */}
          <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Services;
