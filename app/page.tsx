import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-500 text-white">
      <motion.div
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="text-xl mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white text-pink-500">
      <h2 className="text-3xl font-bold text-center mb-10">Our Luxurious Offerings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-pink-500 rounded-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
          <p>Each product is crafted with the finest ingredients, ensuring a luxurious experience.</p>
        </div>
        <div className="border border-pink-500 rounded-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Exclusive Collections</h3>
          <p>Discover our limited edition cosmetics that embody elegance and sophistication.</p>
        </div>
        <div className="border border-pink-500 rounded-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Personalized Service</h3>
          <p>Enjoy tailored beauty consultations that elevate your fashion journey.</p>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero title="Welcome to luxury FashionTV cosmetics" subtitle="Elevate Your Beauty with Elegance" />
      <Features />
    </div>
  );
};

export default HomePage;