const { Order, OrderItem, Product } = require('../models');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice
        } = req.body;

        if (orderItems && orderItems.length === 0) {
            return res.status(400).json({ message: 'No order items' });
        } else {
            const order = await Order.create({
                userId: req.user.id,
                totalPrice,
                paymentMethod,
                shippingAddress: shippingAddress.address,
                shippingCity: shippingAddress.city,
                shippingPostalCode: shippingAddress.postalCode,
                shippingCountry: shippingAddress.country
            });

            for (const item of orderItems) {
                await OrderItem.create({
                    orderId: order.id,
                    productId: item.product,
                    quantity: item.quantity,
                    price: item.price
                });
            }

            res.status(201).json(order);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: { userId: req.user.id },
            include: [
                {
                    model: OrderItem,
                    include: [Product]
                }
            ]
        });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    addOrderItems,
    getMyOrders
};
