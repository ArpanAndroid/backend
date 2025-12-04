import React from 'react';
import { useHome } from '../hooks/useHome';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

/**
 * View for the Home Page
 * Responsible for rendering the UI based on data from the controller.
 */
const Home = () => {
    const { content, loading, error } = useHome();

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: 'var(--color-primary)',
                fontSize: '1.5rem'
            }}>
                Loading...
            </div>
        );
    }

    if (error) {
        return <div>Error loading content</div>;
    }

    return (
        <>
            <Header data={content.header} />
            <main>
                <Hero data={content.hero} />
                <Features data={content.features} />
            </main>
            <Footer data={content.footer} />
        </>
    );
};

export default Home;
