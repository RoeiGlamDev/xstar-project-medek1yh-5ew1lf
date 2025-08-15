import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, reason } = formData;

    if (!name || !email || !message || !reason) {
      setError('All fields are required.');
      return;
    }

    // Here you would typically handle form submission, e.g., API call

    setSuccess(true);
    setError('');
    setFormData({ name: '', email: '', message: '', reason: '' });
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Contact luxury FashionTV cosmetics</h2>
      <p className="text-gray-600 mb-6">For inquiries related to luxury FashionTV cosmetics, please fill out the form below.</p>
      
      {success && <div className="text-green-600 mb-4">Thank you for your message! We will get back to you shortly.</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Contact</label>
          <select
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Collaboration Proposal">Collaboration Proposal</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows={4}
            required
          />
        </motion.div>

        <button
          type="submit"
          className="bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-500 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-pink-600">Business Information</h3>
        <p className="text-gray-600">Address: 123 Fashion Ave, Suite 456, New York, NY 10001</p>
        <p className="text-gray-600">Business Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
        <p className="text-gray-600">Email: contact@luxuryfashiontvcosmetics.com</p>
      </div>
    </section>
  );
};

export default ContactSection;