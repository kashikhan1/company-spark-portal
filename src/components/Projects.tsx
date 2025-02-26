import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const individualProjects = [
  {
    title: "Simple Website",
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
    title: "Professional Portfolio",
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
    title: "Zameen Scrapper",
    description:
      "A real estate web scraping tool that extracts property listings from Zameen.com and stores them in a database. And serves the data through a REST API.",
    image: {
      light: "/projects/scrapper_zameen_homepage.png",
      dark: "/projects/scrapper_zameen_homepage_dark.png",
    },
    tags: ["Cheerio", "React", "Node.js", "Postgres", "Tailwind CSS"],
    liveUrl: "https://zameen.alisquare.com/",
    githubUrl:
      "https://github.com/Muhammad-Abdullah012/scrapper_zameen_backend",
  },
  {
    title: "Rider Pro",
    description:
      "A role-based logistics platform with car rental features, real-time trip management, and an admin dashboard for tracking KPIs. It includes MQTT-powered notifications, advanced filtering, and analytics for efficient fleet operations.",
    image: {
      light: "/projects/ueber-pro-logo.png",
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

const ProjectGrid = ({ projects }: { projects: typeof startupProjects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    {projects.map((project, index) => (
      <Card key={index} className="glass-card group overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image.light}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 dark:hidden"
          />
          <img
            src={project.image.dark || project.image.light}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 dark:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-justify">{project.description}</p>
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                {tag}
              </Badge>
            ))}
          </div> */}
          <div className="flex justify-center">
            {project.liveUrl ? (
              <a
                target="_blank"
                href={project.liveUrl}
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Card>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-background via-background/50 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects showcasing innovation and technical
            excellence.
          </p>

          <Tabs defaultValue="startup" className="w-full max-w-7xl mx-auto">
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
