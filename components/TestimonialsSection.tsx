import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    name: string;
    photo: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Sophia L.',
        photo: '/images/testimonials/sophia.jpg',
        content: 'Luxury FashionTV cosmetics transformed my beauty routine! The products are exquisite and the quality is unmatched.',
        rating: 5,
    },
    {
        name: 'Isabella G.',
        photo: '/images/testimonials/isabella.jpg',
        content: 'I adore the luxurious feel of the skincare line. My skin has never looked better!',
        rating: 5,
    },
    {
        name: 'Olivia T.',
        photo: '/images/testimonials/olivia.jpg',
        content: 'The elegance of the packaging and the effectiveness of the products from luxury FashionTV cosmetics truly stand out.',
        rating: 5,
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-white p-8">
            <h2 className="text-4xl font-bold text-pink-500 text-center mb-8">What Our Clients Say</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="bg-pink-50 rounded-lg p-6 shadow-lg mb-6 md:mb-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-pink-600">{testimonial.name}</h3>
                        <p className="text-gray-700 mb-4">{testimonial.content}</p>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={text-yellow-400 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}}>★</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;