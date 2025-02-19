
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from 180deg, rgb(254,100,121) 0%, rgb(251,221,186) 100% opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <span className="inline-block animate-fade-down px-3 py-1 text-sm font-semibold bg-gray-100 rounded-full mb-4">
            Innovate with Purpose
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
            Transform Your Vision <br />
            Into Reality
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            We help ambitious companies scale through innovative solutions and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
