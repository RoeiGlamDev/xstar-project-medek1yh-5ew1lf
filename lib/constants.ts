export const BRAND_NAME = "luxury FashionTV cosmetics";
export const PRIMARY_COLOR = "#FFC0CB"; // Pink
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for luxury FashionTV cosmetics application.
 * This will hold various constants and configurations utilized across the application.
 * 
 * @constant {Object} config
 * @property {string} brandName - The brand name for the luxury cosmetics line.
 * @property {string} primaryColor - The primary color used in the branding, representing luxury and elegance.
 * @property {string} secondaryColor - The secondary color used in branding, providing a clean and sophisticated contrast.
 */
export const config = {
    brandName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
};

/
 * Interface representing a cosmetic product for luxury FashionTV cosmetics.
 * This defines the structure of a cosmetic product including essential details.
 * 
 * @interface CosmeticProduct
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the cosmetic product.
 * @property {string} description - Description of the product highlighting its luxurious features.
 * @property {number} price - Price of the product reflecting its high-end nature.
 * @property {string} category - Category of the product, e.g., lipstick, foundation, skincare.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
}

/
 * Function to create a new cosmetic product for luxury FashionTV cosmetics.
 * This function should validate and return a new product object.
 * 
 * @param {string} id - Unique identifier for the product.
 * @param {string} name - Name of the cosmetic product.
 * @param {string} description - Description of the product highlighting its luxurious features.
 * @param {number} price - Price of the product reflecting its high-end nature.
 * @param {string} category - Category of the product, e.g., lipstick, foundation, skincare.
 * @returns {CosmeticProduct} - Newly created cosmetic product.
 * @throws {Error} - Throws an error if validation fails.
 */
export function createCosmeticProduct(
    id: string,
    name: string,
    description: string,
    price: number,
    category: string
): CosmeticProduct {
    if (!id || !name || !description || price <= 0 || !category) {
        throw new Error("Invalid product details provided.");
    }

    return {
        id,
        name,
        description,
        price,
        category,
    };
}