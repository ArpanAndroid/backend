import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.name === product.name);
            if (existing) {
                return prev.map(item =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productName) => {
        setCartItems(prev => prev.filter(item => item.name !== productName));
    };

    const updateQuantity = (productName, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productName);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.name === productName ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
