import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
    const styles = {
        card: {
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
        },
        icon: {
            fontSize: '2rem',
            color: 'var(--color-primary)',
            marginBottom: '0.5rem',
        },
        title: {
            fontSize: '1.25rem',
            color: 'var(--color-text)',
        },
        description: {
            color: 'var(--color-text-light)',
            lineHeight: '1.6',
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.icon}>{icon}</div>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
        </div>
    );
};

const Features = ({ data }) => {
    const styles = {
        section: {
            padding: '5rem 2rem',
            backgroundColor: 'var(--color-surface)',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
        },
        title: {
            fontSize: '2.5rem',
            color: 'var(--color-text)',
            marginBottom: '1rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
        }
    };

    return (
        <section style={styles.section} id="features">
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>{data.title}</h2>
                    <p style={{ color: 'var(--color-text-light)' }}>{data.subtitle}</p>
                </div>
                <div style={styles.grid}>
                    {data.items.map((f, index) => (
                        <FeatureCard key={index} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
