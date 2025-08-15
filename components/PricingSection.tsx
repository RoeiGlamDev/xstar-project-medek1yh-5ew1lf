import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essence Package',
    price: '$199',
    features: [
      'Personalized Color Consultation',
      'Two Luxury Cosmetics Products',
      'Exclusive Access to FashionTV Events',
      'Complimentary Shipping',
    ],
  },
  {
    name: 'Signature Package',
    price: '$349',
    features: [
      'All Essence Package Features',
      'Three Additional Luxury Products',
      'Virtual Fashion Consultation',
      'Priority Customer Support',
    ],
  },
  {
    name: 'Elite Package',
    price: '$499',
    features: [
      'All Signature Package Features',
      'Custom Makeup Application',
      'Invitation to Private Fashion Shows',
      'Personalized Beauty Profile',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-500 mb-6">
          Pricing for luxury FashionTV cosmetics
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Discover our exclusive packages designed for the fashion-forward individual.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="bg-pink-100 border border-pink-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold text-pink-500 mb-4">{tier.name}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="text-left mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-gray-600 mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Choose {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;