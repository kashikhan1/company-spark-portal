
import { Card } from './ui/card';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

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
  return (
    <section id="team" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-h-[800px] overflow-y-auto custom-scrollbar px-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary/80 dark:text-primary/60 font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
