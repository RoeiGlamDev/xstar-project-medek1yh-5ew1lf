import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const float = () => {
      if (meshRef.current) {
        meshRef.current.position.y += 0.01  Math.sin(Date.now()  0.001);
      }
      requestAnimationFrame(float);
    };
    float();
  }, []);

  return (
    <mesh ref={meshRef} position={position}>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={new THREE.Color(1, 0.75, 0.8)} />
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElement position={[-1, 0, 0]} />
        <FloatingElement position={[1, 0, 0]} />
        <OrbitControls />
      </Canvas>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-pink-500">luxury FashionTV cosmetics</h1>
        <p className="mt-4 text-2xl text-gray-700">
          Elevate your beauty with our exclusive range of luxury cosmetics,
          designed for the modern fashionista.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
          Explore Our Collection
        </button>
      </motion.div>
    </div>
  );
};

export default FloatingElements;