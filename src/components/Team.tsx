import { Card } from "./ui/card";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Muhammad Ali Anjum",
    github: "https://github.com/alianjum0",
    linkedin: "https://www.linkedin.com/in/alianjum0/",
    twitter: "",
    role: "CEO & Founder",
    image: "/team/Ali-Anjum.jpeg",
    bio: "With 15+ years steering tech innovation, I'm passionate about turning bold ideas into reality. I lead our team with a focus on strategy, growth, and impactful solutions.",
  },
  {
    name: "Muhammad Kashif Khan",
    github: "https://github.com/kashikhan1",
    linkedin: "https://www.linkedin.com/in/muhammad-kashif-khan",
    twitter: "",
    role: "Tech Lead",
    image: "/team/Kashif-Khan.jpeg",
    bio: "With 9+ years in full-stack development, I lead our technical vision, steering projects from architecture to delivery. I mentor developers, ensure scalable solutions, and align tech with business goals.",
  },
  {
    name: "Asim Ghaffar",
    github: "https://github.com/Mr-AsimGhaffar",
    linkedin: "https://www.linkedin.com/in/asim-ghaffar-4a60921b1/",
    twitter: "",
    role: "Frontend Developer",
    image: "/team/Asim-Ghaffar.jpeg",
    bio: "I craft seamless, responsive interfaces using React.js, Next.js, and TypeScript. Detail-driven and creative, I build frontends that enhance user experiences.",
  },
  {
    name: "Muhammad Abdullah",
    github: "https://github.com/Muhammad-Abdullah012",
    linkedin: "https://www.linkedin.com/in/muhammad-abdullah-718a34245/",
    twitter: "",
    role: "Full Stack Developer",
    image: "/team/Muhammad-Abdullah.jpeg",
    bio: "With 2+ years of experience, I develop efficient web and mobile apps from end to end. I bridge frontend and backend to deliver scalable, practical solutions.",
  },
];

const Team = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 350;
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

  return (
    <section
      id="team"
      className="section-padding relative bg-gradient-to-b from-background to-secondary/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span
            role="status"
            aria-live="polite"
            className="inline-block px-3 py-1 text-sm md:text-md font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4 select-none"
          >
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering
            exceptional results.
          </p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex space-x-6 px-4 py-4 overflow-x-auto overflow-y-hidden custom-scrollbar snap-x snap-mandatory scroll-smooth"
            aria-label="Team Members"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") scroll("left");
              if (e.key === "ArrowRight") scroll("right");
            }}
          >
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                role="article"
                aria-labelledby={`team-member-${index}`}
                className="glass-card flex-none w-[300px] md:w-[350px] snap-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative group">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={`${member.name}'s profile picture`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-center space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-secondary text-primary rounded-full p-2 transition-all duration-300 flex items-center justify-center"
                          aria-label={`Visit ${member.name}'s LinkedIn profile`}
                        >
                          <LinkedinIcon className="h-5 w-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${member.name}'s Twitter profile`}
                          className="bg-secondary text-primary rounded-full p-2 transition-all duration-300 flex items-center justify-center"
                        >
                          <TwitterIcon className="h-5 w-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${member.name}'s GitHub profile`}
                          className="bg-secondary text-primary rounded-full p-2 transition-all duration-300 flex items-center justify-center"
                        >
                          <GithubIcon className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center relative z-10">
                  <h3
                    id={`team-member-${index}`}
                    className="text-xl font-semibold mb-2"
                  >
                    {member.name}
                  </h3>
                  <p className="text-primary/80 dark:text-primary/60 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-justify">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>

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

          <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Team;
