import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Mediterranean wedding setup"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-cormorant font-bold mb-6">
              Creating Magical Moments Since 2013
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              With over a decade of experience crafting unforgettable Mediterranean 
              weddings, Amara Wedding has become synonymous with elegance and 
              excellence in Fethiye, Turkey.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-cormorant text-2xl font-bold mb-2">10+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Weddings Planned</p>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-bold mb-2">100%</h3>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-bold mb-2">50+</h3>
                <p className="text-gray-600">Venue Partners</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;