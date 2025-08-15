import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is in view
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`transition-opacity duration-700 ${className`}}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const LuxuryFashionTVCosmetics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-pink-600 mb-6">Welcome to luxury FashionTV cosmetics</h1>
      <FadeIn className="p-4">
        <p className="text-lg text-gray-700">
          Discover the essence of luxury and elegance with our exclusive range of cosmetics. At luxury FashionTV cosmetics, we believe that beauty is an art, and our products are crafted to enhance your natural allure.
        </p>
      </FadeIn>
      <FadeIn className="mt-6">
        <button className="bg-pink-600 text-white font-semibold py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
          Explore Our Collection
        </button>
      </FadeIn>
    </div>
  );
};

export default LuxuryFashionTVCosmetics;