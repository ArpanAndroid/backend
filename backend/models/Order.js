const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        defaultValue: 'COD'
    },
    isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
        validate: {
            isIn: [['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']]
        }
    },
    // Shipping Address Fields
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shippingCity: {
        type: DataTypes.STRING
    },
    shippingPostalCode: {
        type: DataTypes.STRING
    },
    shippingCountry: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

module.exports = Order;
