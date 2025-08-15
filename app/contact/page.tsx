import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
            <motion.div 
                className="text-4xl font-bold text-pink-600 mb-6" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Contact Us at luxury FashionTV cosmetics
            </motion.h1>

            <motion.div 
                className="text-lg text-gray-700 mb-12" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                We would love to hear from you! For inquiries, please fill out the form below or visit us at our boutique.
            </motion.p>

            <form className="w-full max-w-lg bg-pink-100 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="mt-1 block w-full border rounded-lg p-2 focus:border-pink-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="mt-1 block w-full border rounded-lg p-2 focus:border-pink-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea 
                        id="message" 
                        rows={4} 
                        className="mt-1 block w-full border rounded-lg p-2 focus:border-pink-500" 
                        required 
                    />
                </div>
                <div className="mb-6">
                    <button 
                        type="submit" 
                        className="w-full bg-pink-600 text-white font-bold py-2 rounded-lg hover:bg-pink-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            <div className="mt-12 text-center">
                <motion.div 
                    className="text-2xl font-semibold text-pink-600 mb-4" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Visit Us
                </motion.h2>
                <motion.div 
                    className="text-lg text-gray-700 mb-2" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Address: 123 Luxury Ave, Fashion City, CA 90210
                </motion.p>
                <motion.div 
                    className="text-lg text-gray-700 mb-2" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Business Hours: Mon-Fri: 10 AM - 6 PM
                </motion.p>
            </div>
        </div>
    );
};

export default ContactPage;