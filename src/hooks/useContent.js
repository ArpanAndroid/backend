import { useState, useEffect } from 'react';
import { fetchContent } from '../services/api';

export const useContent = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const data = await fetchContent();
                setContent(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, []);

    return { content, loading, error };
};
