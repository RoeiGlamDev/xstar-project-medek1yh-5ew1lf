import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Carter',
    position: 'Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Head of Marketing',
    image: '/images/liam.jpg',
  },
  {
    name: 'Isabella Martinez',
    position: 'Lead Makeup Artist',
    image: '/images/isabella.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 font-serif">
      <motion.header
        className="text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">About luxury FashionTV cosmetics</h1>
        <p className="mt-4 text-lg">
          Where luxury meets creativity in beauty.
        </p>
      </motion.header>

      <motion.section
        className="max-w-4xl mx-auto px-4 py-10"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-5">Our History</h2>
        <p>
          Founded in the heart of the fashion capital, luxury FashionTV cosmetics was born from a passion for high-end beauty and style. Our mission is to empower individuals through exquisite cosmetic products that reflect elegance and sophistication. 
        </p>
        <p className="mt-4">
          With years of experience in the fashion industry, we’ve curated a line that embodies the essence of luxury, ensuring that every product enhances your natural beauty while making a statement.
        </p>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-4 py-10 bg-pink-100 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-5">Our Values</h2>
        <ul className="list-disc pl-5">
          <li className="mt-2">Elegance: We believe beauty should be sophisticated and refined.</li>
          <li className="mt-2">Integrity: We are committed to transparency and ethical practices.</li>
          <li className="mt-2">Innovation: We strive to be at the forefront of beauty trends.</li>
        </ul>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-4 py-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-5">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="mt-4 font-bold">{member.name}</h3>
              <p className="text-sm text-pink-600">{member.position}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;