import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('lastOrder');
        if (saved) {
            setOrderData(JSON.parse(saved));
        } else {
            navigate('/');
        }
    }, [navigate]);

    if (!orderData) return null;

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    return (
        <div className="order-success-page">
            <div className="success-container">
                <div className="success-icon">✓</div>
                <h1>Order Placed Successfully!</h1>
                <p className="success-message">Thank you for your order. We'll deliver it soon!</p>

                <div className="order-details">
                    <h2>Order Details</h2>
                    <div className="detail-row">
                        <span>Order ID:</span>
                        <span className="order-id">{orderData.orderId}</span>
                    </div>
                    <div className="detail-row">
                        <span>Order Date:</span>
                        <span>{orderData.date}</span>
                    </div>
                    <div className="detail-row">
                        <span>Estimated Delivery:</span>
                        <span>{deliveryDate.toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="order-items">
                    <h2>Items Ordered</h2>
                    {orderData.items.map((item) => (
                        <div key={item.name} className="order-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-info">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p className="item-price">{item.price} x {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="order-total">
                    <span>Total Amount:</span>
                    <span className="total-amount">₹{orderData.total}</span>
                </div>

                <div className="delivery-info">
                    <h3>Delivery Address</h3>
                    <p>{orderData.name}</p>
                    <p>{orderData.phone}</p>
                    <p>{orderData.address}</p>
                </div>

                <button onClick={() => navigate('/')} className="btn-continue">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
