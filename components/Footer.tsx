import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white text-pink-600 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-4">{companyName}</h2>
          <p className="text-lg">
            Elevate your beauty with our luxurious cosmetics. Experience the essence of elegance and sophistication.
          </p>
        </motion.div>
        <div className="flex justify-center space-x-8 mb-6">
          <motion.div
            href="#about"
            className="hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#products"
            className="hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#contact"
            className="hover:text-pink-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <motion.div
              key={link.platform}
              href={link.url}
              className="text-pink-600 hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.platform}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-center text-gray-600">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;