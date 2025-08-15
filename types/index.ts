// types/index.ts

// Define the types and interfaces for the luxury FashionTV cosmetics application
// This file includes the types used across the application to ensure type safety and consistency

/
 * Represents a product in the luxury FashionTV cosmetics line.
 */
export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product in the local currency
    category: ProductCategory; // Category the product belongs to
    imageUrl: string; // URL of the product's image
    isFeatured: boolean; // Indicates if the product is a featured item
}

/
 * Represents the categories available in the luxury FashionTV cosmetics collection.
 */
export enum ProductCategory {
    SKINCARE = "Skincare", // Category for skincare products
    MAKEUP = "Makeup", // Category for makeup products
    FRAGRANCE = "Fragrance", // Category for fragrance products
    ACCESSORIES = "Accessories" // Category for beauty accessories
}

/
 * Represents a user in the luxury FashionTV cosmetics application.
 */
export interface User {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address of the user
    password: string; // User's password (hashed)
    isAdmin: boolean; // Indicates if the user has admin privileges
}

/
 * Represents a shopping cart item in the luxury FashionTV cosmetics application.
 */
export interface CartItem {
    productId: string; // ID of the product added to the cart
    quantity: number; // Quantity of the product in the cart
}

/
 * Represents the shopping cart for a user in the luxury FashionTV cosmetics application.
 */
export interface ShoppingCart {
    userId: string; // ID of the user the cart belongs to
    items: CartItem[]; // List of items in the shopping cart
}

/
 * Represents an order placed by a user in the luxury FashionTV cosmetics application.
 */
export interface Order {
    orderId: string; // Unique identifier for the order
    userId: string; // ID of the user who placed the order
    items: CartItem[]; // List of items ordered
    totalAmount: number; // Total amount for the order
    orderDate: Date; // Date when the order was placed
    shippingAddress: string; // Address where the order should be shipped
    status: OrderStatus; // Current status of the order
}

/
 * Represents the possible statuses of an order in the luxury FashionTV cosmetics application.
 */
export enum OrderStatus {
    PENDING = "Pending", // Order is pending confirmation
    SHIPPED = "Shipped", // Order has been shipped
    DELIVERED = "Delivered", // Order has been delivered
    CANCELLED = "Cancelled" // Order has been cancelled
}

/
 * Represents a review for a product in the luxury FashionTV cosmetics collection.
 */
export interface Review {
    productId: string; // ID of the product being reviewed
    userId: string; // ID of the user who wrote the review
    rating: number; // Rating given by the user (1 to 5)
    comment: string; // Review comment from the user
    date: Date; // Date when the review was submitted
}