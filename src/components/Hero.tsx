import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      role="region"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10" />

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <span
            role="status"
            aria-live="polite"
            className="inline-block animate-fade-down px-3 py-1 text-sm md:text-md font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4 select-none"
          >
            Innovate with Purpose
          </span>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up"
          >
            Build Scalable Software <br />
            That Drives Growth
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            From concept to deployment, We deliver custom software solutions
            tailored to your business needs. Let&apos;s grow together.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              aria-label="Get in touch with us"
              className="group inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-md shadow-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://projects.weinnovate.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our portfolio in a new tab"
              className="group inline-flex items-center justify-center px-4 py-2 text-lg font-medium border border-primary text-primary rounded-md shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
