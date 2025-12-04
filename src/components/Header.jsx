import React from 'react';

const Header = ({ data }) => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--color-white)',
      boxShadow: 'var(--shadow-sm)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'var(--color-primary)',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
    },
    link: {
      color: 'var(--color-text)',
      fontWeight: '500',
      transition: 'color 0.2s',
    },
    button: {
      padding: '0.5rem 1.5rem',
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      border: 'none',
      borderRadius: 'var(--border-radius)',
      fontWeight: '600',
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>{data.logo}</div>
      <nav style={styles.nav}>
        {data.links.map((link, index) => (
          <a key={index} href={link.href} style={styles.link}>{link.label}</a>
        ))}
      </nav>
      <button style={styles.button}>{data.cta}</button>
    </header>
  );
};

export default Header;
