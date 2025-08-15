import { css } from 'styled-components';

/
 * Utility functions for luxury FashionTV cosmetics application.
 * This file contains helper functions for styling and formatting
 * specific to the luxury cosmetics brand.
 * 
 * @module utils
 */

export interface ClassNames {
    [key: string]: string;
}

/
 * Generates a class name string based on provided class names.
 * @param classNames - An array of class names to be combined.
 * @returns A single string of class names separated by spaces.
 */
export const cn = (...classNames: string[]): string => {
    return classNames.filter(Boolean).join(' ');
};

/
 * Formats a price to a luxury standard, ensuring to include currency formatting.
 * @param price - The price to format.
 * @returns A formatted price string with a luxury feel.
 */
export const formatPrice = (price: number): string => {
    return $${price.toFixed(2)};
};

/
 * Returns a styled component for the luxury FashionTV cosmetics brand colors.
 * This function can be used to generate styles for various components.
 * @returns A CSS string with the brand's color scheme.
 */
export const luxuryFashionTVStyles = css
    --primary-color: pink;
    --secondary-color: white;

    body {
        background-color: var(--secondary-color);
        color: var(--primary-color);
        font-family: 'Garamond', serif;
    }

    h1, h2, h3 {
        color: var(--primary-color);
        text-align: center;
    }

    .button {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: none;
        padding: 15px 30px;
        text-transform: uppercase;
        font-weight: bold;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: white;
            color: pink;
        }
    }

    .footer {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        text-align: center;
        padding: 20px;
    }
;

/
 * Interface representing a cosmetic product in the luxury FashionTV cosmetics line.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

/
 * Sample data for luxury FashionTV cosmetics products.
 * This data can be used to populate the product sections of the website.
 */
export const sampleProducts: CosmeticProduct[] = [
    {
        id: '1',
        name: 'Velvet Matte Lipstick',
        description: 'Indulge your lips with our luxurious, long-lasting matte lipstick that feels as good as it looks.',
        price: 29.99,
        imageUrl: '/images/lipstick.jpg',
    },
    {
        id: '2',
        name: 'Silk Touch Foundation',
        description: 'Achieve a flawless complexion with our silk touch foundation, designed for a radiant finish.',
        price: 49.99,
        imageUrl: '/images/foundation.jpg',
    },
    {
        id: '3',
        name: 'Luxury Eye Shadow Palette',
        description: 'Elevate your makeup game with our exquisite eye shadow palette featuring rich, blendable colors.',
        price: 39.99,
        imageUrl: '/images/eyeshadow.jpg',
    },
];