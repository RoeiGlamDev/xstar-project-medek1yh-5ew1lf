import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Glam Package',
    price: '$299',
    description: 'Indulge in our ultimate glam experience, designed for those who seek the extraordinary.',
    features: [
      'Personalized makeup consultation',
      'Exclusive product samples',
      'Complimentary touch-up kit',
      'VIP access to FashionTV events',
    ],
  },
  {
    title: 'Fashionista Essentials',
    price: '$199',
    description: 'Perfect for those who want to elevate their everyday look with premium products.',
    features: [
      'Makeup application',
      'Customized product recommendations',
      'Exclusive discounts on future purchases',
    ],
  },
  {
    title: 'Signature Look Experience',
    price: '$149',
    description: 'Achieve your signature look with the help of our expert artists.',
    features: [
      'One-on-one beauty session',
      'FashionTV exclusive products',
      'Personalized skincare advice',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 py-10">
      <motion.div 
        className="text-4xl font-bold text-center mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Pricing for luxury FashionTV cosmetics
      </motion.h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingOptions.map((option, index) => (
          <motion.div 
            key={index} 
            className="bg-pink-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <p className="mb-4">{option.description}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="bg-pink-600 text-white py-2 px-4 rounded-full hover:bg-pink-500 transition-colors">
              Select Package
            </button>
          </motion.div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">FAQs</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-100 p-4 mb-4 rounded-lg">
            <h3 className="font-semibold">What is included in the Luxury Glam Package?</h3>
            <p>Our Luxury Glam Package includes a personalized makeup consultation, exclusive product samples, a complimentary touch-up kit, and VIP access to FashionTV events.</p>
          </div>
          <div className="bg-pink-100 p-4 mb-4 rounded-lg">
            <h3 className="font-semibold">How can I book a session?</h3>
            <p>You can book a session directly through our website or by contacting our customer service team for assistance.</p>
          </div>
          <div className="bg-pink-100 p-4 mb-4 rounded-lg">
            <h3 className="font-semibold">Are your products cruelty-free?</h3>
            <p>Yes, luxury FashionTV cosmetics is committed to providing cruelty-free products.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;