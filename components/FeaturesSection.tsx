import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'At luxury FashionTV cosmetics, we provide exclusive products made from the finest ingredients, ensuring a luxurious experience with every application.',
    icon: <i className="fas fa-gem text-pink-500 text-4xl"></i>,
  },
  {
    title: 'Exquisite Packaging',
    description: 'Our cosmetics come in beautifully designed packaging that reflects the elegance and sophistication of luxury FashionTV cosmetics.',
    icon: <i className="fas fa-box-open text-pink-500 text-4xl"></i>,
  },
  {
    title: 'Personalized Experience',
    description: 'We offer tailored consultations to help you choose the perfect shades and products that enhance your unique beauty.',
    icon: <i className="fas fa-user-circle text-pink-500 text-4xl"></i>,
  },
  {
    title: 'Sustainable Luxury',
    description: 'Committed to sustainability, our products are cruelty-free, and we strive to minimize our environmental impact while maintaining luxury standards.',
    icon: <i className="fas fa-leaf text-pink-500 text-4xl"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-5xl font-bold mb-10 text-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of FashionTV Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-pink-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;