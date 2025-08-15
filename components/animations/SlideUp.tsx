import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

const LuxuryFashionTVCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-pink-500 min-h-screen flex flex-col items-center justify-center">
      <header className="w-full p-6 bg-pink-500 text-white shadow-lg">
        <h1 className="text-4xl font-bold text-center">luxury FashionTV cosmetics</h1>
      </header>
      <main className="flex flex-col items-center p-8">
        <SlideUp>
          <h2 className="text-3xl font-semibold mb-4">Elevate Your Beauty</h2>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-lg text-center mb-6">
            Discover the essence of luxury with our exclusive line of cosmetics,
            tailored for the sophisticated individual. At luxury FashionTV cosmetics,
            we bring you the finest beauty products that embody elegance and style.
          </p>
        </SlideUp>
        <SlideUp delay={0.4}>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </SlideUp>
      </main>
      <footer className="w-full p-4 bg-pink-500 text-white text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} luxury FashionTV cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryFashionTVCosmetics;