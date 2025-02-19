
import { Check } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    title: 'Digital Strategy',
    description: 'Develop comprehensive digital strategies to drive growth and innovation.',
    features: ['Market Analysis', 'Competitive Research', 'Growth Planning'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  },
  {
    title: 'Web Development',
    description: 'Create stunning, responsive websites that deliver exceptional user experiences.',
    features: ['Custom Development', 'Responsive Design', 'Performance Optimization'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    title: 'Brand Identity',
    description: 'Build compelling brand identities that resonate with your target audience.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Solutions We Provide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
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
      </div>
    </section>
  );
};

export default Services;
