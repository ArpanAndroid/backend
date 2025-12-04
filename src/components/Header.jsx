import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ data }) => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          {data?.logo || 'FionaGreens'}
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {data?.links?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {getCartCount() > 0 && (
            <button className="cart-button" onClick={() => {
              navigate('/cart');
              setIsMenuOpen(false);
            }}>
              🛒 Cart
              <span className="cart-badge">{getCartCount()}</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
