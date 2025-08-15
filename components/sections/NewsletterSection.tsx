import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Informed with luxury FashionTV cosmetics",
  description = "Join our exclusive community for the latest in luxury fashion cosmetics. Sign up to receive updates on new arrivals, trends, and special offers."
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email capture
    if (email) {
      setIsSubmitted(true);
      // Here you would typically handle the email submission to your backend
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-pink-600">{title}</h2>
        <p className="mt-4 text-lg text-gray-700">{description}</p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="ml-2 bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <motion.div
            className="mt-6 text-lg text-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxury FashionTV cosmetics! Stay tuned for our latest updates.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;