import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useRef, useState } from "react";

const individualProjects = [
  {
    title: "Simple User-Friendly Website",
    description:
      "A modern website showcasing projects and services with a dynamic theme and language switcher.",
    image: {
      light: "/projects/Andrea_Silato_studio_website.png",
    },
    tags: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://studio.weinnovate.net/",
    githubUrl: "#",
  },
  {
    title: "Innovative Professional Portfolio",
    description:
      "A modern portfolio website showcasing individual projects and skills with a dynamic theme switcher.",
    image: {
      light: "/projects/Dr_Ahsan_Iqbal_personal_portfolio.png",
    },
    tags: ["Svelte", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ahsaniqbal.weinnovate.net/",
    githubUrl: "#",
  },
  {
    title: "Full Stack Developer Portfolio",
    description:
      "A modern portfolio website showcasing individual projects and skills.",
    image: {
      light: "/projects/Kashif_Khan_personal_portfolio.png",
    },
    tags: ["Tailwind CSS", "TypeScript", "Next.js"],
    liveUrl: "https://kashif.weinnovate.net/",
    githubUrl: "#",
  },
  {
    title: "Frontend Developer Portfolio",
    description:
      "A sleek online portfolio displaying individual work and professional abilities.",
    image: {
      light: "/projects/Asim_Ghaffar_personal_portfolio.png",
    },
    tags: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://asim.weinnovate.net",
    githubUrl: "#",
  },
  {
    title: "Backend Developer Portfolio",
    description:
      "A contemporary portfolio site highlighting personal projects and expertise.",
    image: {
      light: "/projects/Muhammad_Abdullah_personal_portfolio.png",
    },
    tags: ["Svelte", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://abdullah.weinnovate.net",
    githubUrl: "#",
  },
];

const startupProjects = [
  {
    title: "Attaq Properties Finder",
    description:
      "Effortlessly collect real estate insights with this web scraping tool. Zameen Scraper pulls property listings from Zameen.com, stores them in a database, and delivers the data through a fast, flexible REST API—perfect for developers, analysts, or businesses tracking Pakistan's property market.",
    image: {
      light: "/projects/scrapper_zameen_homepage.png",
      dark: "/projects/scrapper_zameen_homepage_dark.png",
    },
    tags: ["Cheerio", "React", "Node.js", "Postgres", "Tailwind CSS"],
    liveUrl: "",
    githubUrl:
      "https://github.com/Muhammad-Abdullah012/scrapper_zameen_backend",
  },
  {
    title: "Rider Pro",
    description:
      "A role-based logistics platform with car rental features, real-time trip management, and an admin dashboard for tracking KPIs. It includes MQTT-powered notifications, advanced filtering, and analytics for efficient fleet operations.",
    image: {
      light: "/projects/rider-pro-dashboard.png",
    },
    tags: [
      "PostgreSQL",
      "Express",
      "NextJs",
      "Node.js",
      "Typescript",
      "Prisma",
      "MQTT",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Muhammad-Abdullah012/ueber-pro",
  },
  {
    title: "Brain Bash",
    description:
      "A dynamic quiz platform with customizable question sets, real-time scoring, and user progress tracking. It offers an engaging experience for learning and self-assessment.",
    image: {
      light: "/projects/brain-bash-logo.png",
    },
    tags: [
      "PostgreSQL",
      "Express",
      "NextJs",
      "Node.js",
      "Typescript",
      "Prisma",
      "MQTT",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Muhammad-Abdullah012/brain-bash",
  },
];

const ProjectGrid = ({ projects }: { projects: typeof startupProjects }) => {
  const [isContentScrollable, setIsContentScrollable] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector(".snap-center");
      const scrollAmount = firstCard ? firstCard.clientWidth : 350;
      const currentScroll = sliderRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? Math.max(currentScroll - scrollAmount, 0)
          : currentScroll + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current!;
      setIsContentScrollable(scrollWidth > clientWidth);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    };

    // Initial update
    updateScrollState();

    // Add event listener for scroll events
    const slider = sliderRef.current;
    slider.addEventListener("scroll", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
    };
  }, [projects]);

  return (
    <div className="relative">
      {/* Inner container for the scrolling animation */}
      <div
        ref={sliderRef}
        role="region"
        aria-label="Project Grid"
        className="flex gap-8 px-4 py-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") scroll("left");
          if (e.key === "ArrowRight") scroll("right");
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`glass-card flex-none w-[300px] md:w-[350px] snap-center transform hover:scale-105 transition-all duration-300 ${
              project.liveUrl ? "cursor-pointer" : ""
            }`}
            onClick={() => {
              if (project.liveUrl) {
                window.open(project.liveUrl, "_blank");
              }
            }}
            role={project.liveUrl ? "link" : undefined}
            aria-label={project.liveUrl ? `Visit ${project.title}` : undefined}
            tabIndex={project.liveUrl ? 0 : undefined}
            onKeyDown={(e) => {
              if (e.key === "Enter" && project.liveUrl) {
                window.open(project.liveUrl, "_blank");
              }
            }}
          >
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={project.image.light}
                alt={`${project.title} - Light Mode`}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110 dark:hidden"
                loading="lazy"
              />
              <img
                src={project.image.dark || project.image.light}
                alt={`${project.title} - Dark Mode`}
                className="w-full h-full  transition-transform duration-500 group-hover:scale-110 dark:block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-justify hyphens-auto">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      {/* Left Navigation Button */}
      <Button
        variant="ghost"
        size="icon"
        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-background z-10 ${
          !isContentScrollable || !canScrollLeft ? "hidden" : ""
        }`}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        tabIndex={isContentScrollable && canScrollLeft ? 0 : -1}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Right Navigation Button */}
      <Button
        variant="ghost"
        size="icon"
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-background z-10 ${
          !isContentScrollable || !canScrollRight ? "hidden" : ""
        }`}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        tabIndex={isContentScrollable && canScrollRight ? 0 : -1}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 rounded-full" />
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-background via-background/50 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm md:text-md font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4 select-none">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects showcasing innovation and technical
            excellence.
          </p>

          <Tabs
            defaultValue="startup"
            className="w-full max-w-7xl mx-auto mt-4"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="startup">Startup Projects</TabsTrigger>
              <TabsTrigger value="individual">Individual Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="startup" className="mt-0">
              <ProjectGrid projects={startupProjects} />
            </TabsContent>
            <TabsContent value="individual" className="mt-0">
              <ProjectGrid projects={individualProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
