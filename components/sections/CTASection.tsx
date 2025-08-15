import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Beauty with luxury FashionTV cosmetics", 
  subtitle = "Indulge in our exclusive luxury cosmetics line crafted for the modern fashionista.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop" 
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16 px-4">
      <motion.div 
        className="text-4xl font-bold text-pink-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg text-gray-700 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={buttonLink}
        className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;