import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flower2, Camera, UtensilsCrossed, Music } from 'lucide-react';

const services = [
  {
    icon: Flower2,
    title: 'Floral Design',
    description: 'Stunning Mediterranean-inspired floral arrangements that capture the essence of your special day.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services to immortalize your precious moments against Fethiye\'s backdrop.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Catering',
    description: 'Exquisite Turkish and international cuisine prepared by renowned local chefs.',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Live music, DJs, and traditional Turkish entertainment options for your celebration.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cormorant font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every detail meticulously crafted to create your perfect Mediterranean wedding
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-dusty-rose mb-4">
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-cormorant font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-warm-brown hover:text-dusty-rose transition-colors duration-300">
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;