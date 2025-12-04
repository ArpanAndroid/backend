import React from 'react';

const Footer = ({ data }) => {
    const styles = {
        footer: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '4rem 2rem 2rem',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
        },
        top: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
        },
        link: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            transition: 'color 0.2s',
        },
        bottom: {
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.6)',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.top}>
                    <div style={styles.column}>
                        <div style={styles.logo}>{data.logo}</div>
                        <p style={{ maxWidth: '300px', color: 'rgba(255,255,255,0.8)' }}>
                            {data.tagline}
                        </p>
                    </div>
                    <div style={styles.column}>
                        <h4>Product</h4>
                        {data.links.product.map((link, index) => (
                            <a key={index} href="#" style={styles.link}>{link}</a>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <h4>Company</h4>
                        {data.links.company.map((link, index) => (
                            <a key={index} href="#" style={styles.link}>{link}</a>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <h4>Connect</h4>
                        {data.links.connect.map((link, index) => (
                            <a key={index} href="#" style={styles.link}>{link}</a>
                        ))}
                    </div>
                </div>
                <div style={styles.bottom}>
                    {data.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
