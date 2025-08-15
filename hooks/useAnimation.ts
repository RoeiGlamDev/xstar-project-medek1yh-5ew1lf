import { useEffect, useRef } from 'react';

/
 * @interface AnimationOptions
 * @property {boolean} isVisible - Determines if the element is visible.
 * @property {number} duration - Duration of the animation in milliseconds.
 * @property {string} animationType - Type of animation to be applied (e.g., 'fade', 'slide').
 */

/
 * Custom hook to manage animations for luxury FashionTV cosmetics.
 * This hook provides elegant animations to enhance the user experience 
 * on the luxury FashionTV cosmetics website, aligning with high-end fashion design principles.
 * 
 * @param {AnimationOptions} options - Options for the animation behavior.
 * @returns {RefObject<HTMLDivElement>} ref - A ref to be attached to the animated element.
 */
export const useAnimation = (options: AnimationOptions) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (ref.current) {
            // Apply the animation based on the provided options
            const { isVisible, duration, animationType } = options;

            // Define the animation styles
            const animationStyles = {
                transition: opacity ${duration}ms ease-in-out,
                opacity: isVisible ? 1 : 0,
                transform: isVisible && animationType === 'slide' ? 'translateY(0)' : 'translateY(20px)',
            };

            // Apply styles to the element
            Object.assign(ref.current.style, animationStyles);
        }
    }, [options]);

    return ref;
};