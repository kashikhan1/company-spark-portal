
import { Check } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    title: 'Digital Strategy',
    description: 'Develop comprehensive digital strategies to drive growth and innovation.',
    features: ['Market Analysis', 'Competitive Research', 'Growth Planning'],
  },
  {
    title: 'Web Development',
    description: 'Create stunning, responsive websites that deliver exceptional user experiences.',
    features: ['Custom Development', 'Responsive Design', 'Performance Optimization'],
  },
  {
    title: 'Brand Identity',
    description: 'Build compelling brand identities that resonate with your target audience.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-100 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Solutions We Provide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
