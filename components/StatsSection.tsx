import React from 'react';
import { motion } from 'framer-motion';

interface Stats {
  label: string;
  value: number;
}

const statistics: Stats[] = [
  { label: 'Years of Excellence', value: 5 },
  { label: 'Luxury Products', value: 120 },
  { label: 'Happy Customers', value: 5000 },
  { label: 'Global Presence', value: 20 }
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="text-3xl font-semibold text-pink-600">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="counter"
                >
                  {stat.value}
                </motion.span>
              </motion.h3>
              <p className="text-lg text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;