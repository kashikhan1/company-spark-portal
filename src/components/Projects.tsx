
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const individualProjects = [
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad0f5',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern portfolio website showcasing individual projects and skills with a dynamic theme switcher.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const startupProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, file sharing, and team communication features.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Team Collaboration Tool',
    description: 'Enterprise-level collaboration platform with video conferencing and document sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    tags: ['React', 'WebRTC', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const ProjectGrid = ({ projects }: { projects: typeof startupProjects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    {projects.map((project, index) => (
      <Card key={index} className="glass-card group overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              Source Code
            </Button>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background via-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our latest projects showcasing innovation and technical excellence.
          </p>

          <Tabs defaultValue="startup" className="w-full max-w-3xl mx-auto">
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
