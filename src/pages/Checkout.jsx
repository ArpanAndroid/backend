import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendOTP = (e) => {
        e.preventDefault();
        if (formData.phone.length === 10) {
            setShowOTP(true);
            // Demo: Auto-fill OTP after 2 seconds
            setTimeout(() => {
                setOtp('123456');
            }, 2000);
        } else {
            alert('Please enter a valid 10-digit mobile number');
        }
    };

    const handlePlaceOrder = () => {
        if (otp === '123456') {
            const orderData = {
                ...formData,
                items: cartItems,
                total: getCartTotal(),
                orderId: 'ORD' + Date.now(),
                date: new Date().toLocaleDateString()
            };
            localStorage.setItem('lastOrder', JSON.stringify(orderData));
            clearCart();
            navigate('/order-success');
        } else {
            alert('Invalid OTP. Please enter 123456');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/')} className="btn-primary">
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h1>Checkout</h1>
                <div className="checkout-content">
                    <div className="checkout-form">
                        <h2>Customer Information</h2>
                        <form onSubmit={handleSendOTP}>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength="10"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Delivery Address *</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="3"
                                    required
                                />
                            </div>
                            {!showOTP && (
                                <button type="submit" className="btn-send-otp">
                                    Send OTP
                                </button>
                            )}
                        </form>

                        {showOTP && (
                            <div className="otp-section">
                                <h3>Mobile Verification</h3>
                                <p>OTP sent to {formData.phone}</p>
                                <p className="demo-note">(Demo: OTP is 123456)</p>
                                <div className="form-group">
                                    <label>Enter OTP</label>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        maxLength="6"
                                        placeholder="Enter 6-digit OTP"
                                    />
                                </div>
                                <button onClick={handlePlaceOrder} className="btn-place-order">
                                    Place Order
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-items">
                            {cartItems.map((item) => (
                                <div key={item.name} className="summary-item">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>₹{parseInt(item.price.replace('₹', '')) * item.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-total">
                            <span>Total:</span>
                            <span>₹{getCartTotal()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
