import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { register, createOrder } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'India'
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Register User
            const userResponse = await register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone: formData.phone
            });

            const token = userResponse.token;

            // 2. Create Order
            const orderItems = cartItems.map(item => ({
                product: item.id, // Ensure product has ID
                quantity: item.quantity,
                price: parseFloat(item.price.replace('₹', ''))
            }));

            const orderData = {
                orderItems,
                shippingAddress: {
                    address: formData.address,
                    city: formData.city,
                    postalCode: formData.postalCode,
                    country: formData.country
                },
                paymentMethod: 'COD',
                totalPrice: getCartTotal()
            };

            await createOrder(orderData, token);

            // Success
            clearCart();
            navigate('/order-success');
        } catch (error) {
            alert(error.message);
            // If user exists, maybe try login? (For now just alert)
        } finally {
            setLoading(false);
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
                        <form onSubmit={handlePlaceOrder}>
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
                                <label>Password *</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength="6"
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
                                <label>Address *</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="2"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Postal Code *</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-place-order" disabled={loading}>
                                {loading ? 'Processing...' : 'Place Order'}
                            </button>
                        </form>
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
