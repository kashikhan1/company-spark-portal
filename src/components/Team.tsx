
import { Card } from './ui/card';
import { GithubIcon, LinkedinIcon, TwitterIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1605405748313-a416a1b84491',
    bio: 'Visionary leader with over 15 years of experience in tech innovation.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    bio: 'Tech enthusiast and software architect with a passion for scalable solutions.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    bio: 'Award-winning designer specializing in user-centered experiences.',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    bio: 'Full-stack developer with expertise in modern web technologies.',
  },
  {
    name: 'Lisa Martinez',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    bio: 'Creating intuitive and engaging user experiences through design.',
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    bio: 'Strategic product leader focused on delivering value to customers.',
  }
];

const Team = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      const currentScroll = sliderRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      sliderRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="section-padding relative bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-moving-lines-on-black-background-48160-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex space-x-6 px-4 py-4 overflow-x-auto custom-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="glass-card flex-none w-[300px] md:w-[350px] snap-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative group">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-center space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href="#" className="text-white hover:text-primary transition-colors">
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-white hover:text-primary transition-colors">
                        <TwitterIcon className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-white hover:text-primary transition-colors">
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center relative z-10">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary/80 dark:text-primary/60 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-background z-10"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-background z-10"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Team;
