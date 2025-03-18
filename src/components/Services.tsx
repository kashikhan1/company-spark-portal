import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useRef } from "react";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Sleek, high-performance websites built for freelancers and small businesses.",
    features: ["Custom Design", "SEO-Friendly", "Mobile Responsive"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Startup Software Solutions",
    description:
      "End-to-end software to help startups scale and succeed.",
    features: [
      "MVP Development",
      "Scalable Architecture",
      "Third-Party Integrations",
    ],
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5",
  },
  {
    title: "Technical Consultation & Strategy",
    description:
      "Expert guidance to navigate tech choices and fuel your growth.",
    features: ["Market Research", "Tech Stack Selection", "Growth Planning"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    title: "Branding & Digital Identity",
    description:
      "Standout branding that defines your place in the market.",
    features: [
      "Logo & Visual Design",
      "Brand Guidelines",
      "Consistent Digital Presence",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const Services = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Solutions We Provide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Unlock your business&apos;s potential with tailored digital solutions that drive growth and impact.
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
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                        <span>{feature}</span>
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
