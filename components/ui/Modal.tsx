import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-md">
      <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg border-2 border-pink-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-4">{title}</h2>
          <div className="text-gray-700">
            <p className="mb-4">
              Welcome to <span className="font-semibold">luxury FashionTV cosmetics</span>, where elegance meets beauty. Our exclusive range of cosmetics is designed for those who appreciate the finer things in life.
            </p>
            {children}
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 text-white bg-pink-600 rounded hover:bg-pink-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </motion.div>
      </div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50 cursor-pointer"
      ></div>
    </div>
  );
};

export default Modal;