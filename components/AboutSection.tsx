import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  story: string;
  mission: string;
  teamMembers: { name: string; role: string; expertise: string }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ story, mission, teamMembers }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-4xl font-bold text-pink-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Story of luxury FashionTV cosmetics
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {story}
        </motion.p>
        
        <motion.div
          className="text-4xl font-bold text-pink-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {mission}
        </motion.p>

        <motion.div
          className="text-4xl font-bold text-pink-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-pink-600">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;