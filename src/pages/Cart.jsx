import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your Cart is Empty</h2>
                <p>Add some products to get started!</p>
                <button onClick={() => navigate('/')} className="btn-primary">
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.name} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-item-category">{item.category}</p>
                                <p className="cart-item-price">{item.price}</p>
                            </div>
                            <div className="cart-item-controls">
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                                </div>
                                <button className="btn-remove" onClick={() => removeFromCart(item.name)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>₹{getCartTotal()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total:</span>
                        <span>₹{getCartTotal()}</span>
                    </div>
                    <button className="btn-checkout" onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
