import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene: React.FC = () => {
  useEffect(() => {
    // Initialize any required three.js features or models here
  }, []);

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-pink-100 opacity-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <Canvas className="relative z-10" camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add 3D models here /}
        <OrbitControls />
      </Canvas>
      <motion.div
        className="absolute text-5xl font-bold text-pink-600 z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        luxury FashionTV cosmetics
      </motion.h1>
      <motion.div
        className="absolute text-xl text-gray-700 z-20 mt-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Discover the epitome of elegance and sophistication with our luxury cosmetics line.
      </motion.p>
      <motion.div
        className="absolute mt-40 bg-pink-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
      <motion.footer
        className="absolute bottom-5 text-sm text-gray-600 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} luxury FashionTV cosmetics. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Scene;