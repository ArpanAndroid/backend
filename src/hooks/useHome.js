import { useState, useEffect } from 'react';
import { fetchContent, fetchProducts } from '../services/api';

/**
 * Controller for the Home Page
 * Handles data fetching and state management.
 */
export const useHome = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const [encryptedData, products] = await Promise.all([
                    fetchContent(),
                    fetchProducts()
                ]);

                const decryptedData = JSON.parse(atob(encryptedData));

                // Merge API products into static content
                if (products && products.length > 0) {
                    decryptedData.products.items = products.map(p => ({
                        ...p,
                        price: `₹${p.price}` // Format price
                    }));
                }

                setContent(decryptedData);
            } catch (err) {
                console.error("Error loading content:", err);
                // Fallback to static content if API fails (optional, but good for robustness)
                try {
                    const encryptedData = await fetchContent();
                    const decryptedData = JSON.parse(atob(encryptedData));
                    setContent(decryptedData);
                } catch (e) {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, []);

    return { content, loading, error };
};
