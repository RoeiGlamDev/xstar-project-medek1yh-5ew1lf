import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for luxury FashionTV cosmetics.
 * This hook initializes a Three.js scene and handles rendering for elegant product displays.
 *
 * @returns {Object} - Contains the ref for the canvas element and the start function.
 */
export const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scene = useRef<THREE.Scene | null>(null);
    const camera = useRef<THREE.PerspectiveCamera | null>(null);
    const renderer = useRef<THREE.WebGLRenderer | null>(null);

    /
     * Initializes the 3D scene, camera, and renderer for luxury FashionTV cosmetics.
     */
    const init3DScene = () => {
        // Create a new scene
        scene.current = new THREE.Scene();
        scene.current.background = new THREE.Color(0xffffff); // White background for luxury feel

        // Set up camera
        camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.current.position.z = 5;

        // Set up renderer
        renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
        renderer.current.setSize(window.innerWidth, window.innerHeight);
        
        // Add ambient light for luxury illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.current.add(ambientLight);
    };

    /
     * Starts the animation loop for the 3D elements in luxury FashionTV cosmetics.
     */
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.current?.render(scene.current!, camera.current!);
    };

    useEffect(() => {
        if (canvasRef.current) {
            init3DScene();
            animate();

            // Handle window resize
            const handleResize = () => {
                if (camera.current) {
                    camera.current.aspect = window.innerWidth / window.innerHeight;
                    camera.current.updateProjectionMatrix();
                }
                renderer.current?.setSize(window.innerWidth, window.innerHeight);
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return { canvasRef };
};