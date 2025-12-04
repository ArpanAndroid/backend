import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ data }) => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();

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
      cursor: 'pointer',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    link: {
      color: 'var(--color-text)',
      fontWeight: '500',
      transition: 'color 0.2s',
      cursor: 'pointer',
    },
    cartButton: {
      position: 'relative',
      padding: '0.5rem 1rem',
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      border: 'none',
      borderRadius: 'var(--border-radius)',
      fontWeight: '600',
      cursor: 'pointer',
    },
    cartBadge: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      background: '#ff4444',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem',
      fontWeight: 'bold',
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => navigate('/')}>{data?.logo || 'FionaGreens'}</div>
      <nav style={styles.nav}>
        {data?.links?.map((link, index) => (
          <a key={index} href={link.href} style={styles.link}>{link.label}</a>
        ))}
        <button style={styles.cartButton} onClick={() => navigate('/cart')}>
          🛒 Cart
          {getCartCount() > 0 && (
            <span style={styles.cartBadge}>{getCartCount()}</span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
