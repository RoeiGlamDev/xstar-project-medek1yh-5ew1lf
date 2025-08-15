import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-white min-h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: ''url('/images/luxury-background.jpg')' '}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 p-8">
        <motion.div
          className="text-5xl md:text-6xl font-bold text-pink-600 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          luxury FashionTV cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-lg md:text-xl text-white font-light drop-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Elevate your beauty routine with luxury FashionTV cosmetics, where high fashion meets exquisite quality.
        </motion.p>
        <motion.div
          href="/shop"
          className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Shop Now}
        </motion.a>
        <motion.div
          className="mt-4 text-white text-sm font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Trusted by top fashion influencers</p>
          <p>Featured in Vogue, Harper's Bazaar, and more</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;