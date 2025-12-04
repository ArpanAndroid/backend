import React from 'react';

const Hero = ({ data }) => {
    const styles = {
        hero: {
            backgroundColor: 'var(--color-secondary)',
            padding: '6rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
        },
        headline: {
            fontSize: '3.5rem',
            color: 'var(--color-primary)',
            maxWidth: '800px',
            lineHeight: '1.1',
        },
        subheadline: {
            fontSize: '1.25rem',
            color: 'var(--color-text-light)',
            maxWidth: '600px',
        },
        ctaGroup: {
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
        },
        primaryButton: {
            padding: '1rem 2rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--border-radius)',
            fontSize: '1.1rem',
            fontWeight: '600',
            boxShadow: 'var(--shadow-md)',
        },
        secondaryButton: {
            padding: '1rem 2rem',
            backgroundColor: 'white',
            color: 'var(--color-primary)',
            border: '2px solid var(--color-primary)',
            borderRadius: 'var(--border-radius)',
            fontSize: '1.1rem',
            fontWeight: '600',
        }
    };

    return (
        <section style={styles.hero} id="home">
            <h1 style={styles.headline}>{data.headline}</h1>
            <p style={styles.subheadline}>{data.subheadline}</p>
            <div style={styles.ctaGroup}>
                <button style={styles.primaryButton}>{data.primaryCta}</button>
                <button style={styles.secondaryButton}>{data.secondaryCta}</button>
            </div>
        </section>
    );
};

export default Hero;
