import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Silver',
    price: '€XX,000',
    features: [
      'Wedding Ceremony Setup',
      'Basic Floral Arrangements',
      'Photography Package (4 hours)',
      'Wedding Coordinator',
      'Basic Sound System',
    ],
  },
  {
    name: 'Gold',
    price: '€XX,000',
    features: [
      'All Silver Package Features',
      'Premium Floral Arrangements',
      'Photography & Video (8 hours)',
      'Live Music (2 hours)',
      'Catering (50 guests)',
      'Wedding Cake',
    ],
  },
  {
    name: 'Platinum',
    price: '€XX,000',
    features: [
      'All Gold Package Features',
      'Luxury Floral Design',
      'Full Day Photography & Video',
      'Live Band & DJ',
      'Premium Catering (100 guests)',
      'Luxury Transportation',
      'Spa Package for Couple',
    ],
  },
];

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="packages" className="py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cormorant font-bold mb-4">Wedding Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your dream Mediterranean wedding
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                pkg.name === 'Gold' ? 'transform md:-translate-y-4' : ''
              }`}
            >
              <div className={`p-8 ${
                pkg.name === 'Gold' ? 'bg-dusty-rose text-white' : ''
              }`}>
                <h3 className="text-3xl font-cormorant font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold mb-4">{pkg.price}</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-dusty-rose mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 px-6 py-3 rounded-full transition-colors duration-300 ${
                  pkg.name === 'Gold'
                    ? 'bg-dusty-rose text-white hover:bg-warm-brown'
                    : 'bg-soft-cream hover:bg-dusty-rose hover:text-white'
                }`}>
                  Choose Package
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;