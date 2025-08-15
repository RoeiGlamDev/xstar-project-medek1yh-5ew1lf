import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-md border border-pink-500 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      role="article"
      aria-label={title}
    >
      <img src={imageUrl} alt={${title} image} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-pink-500 font-bold text-2xl mb-2">{title}</h3>
        <p className="text-white text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;