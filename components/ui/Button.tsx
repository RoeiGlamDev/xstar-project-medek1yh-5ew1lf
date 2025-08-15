import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  primary: 'bg-pink-500 hover:bg-pink-600 text-white',
  secondary: 'bg-white hover:bg-pink-100 text-pink-500 border border-pink-500',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <motion.div
      className={`px-6 py-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out ${buttonVariants[variant]`}}
      onClick={onClick}
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </motion.button>
  );
};

export default Button;