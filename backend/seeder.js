const dotenv = require('dotenv');
const { sequelize } = require('./config/db');
const { User, Product, Order, OrderItem } = require('./models');
const users = require('./data/users');
const products = require('./data/products');

dotenv.config();

const importData = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Reset database

        // Create Users
        const createdUsers = await User.bulkCreate(users, {
            individualHooks: true, // Run hooks to hash passwords
            returning: true
        });

        const adminUser = createdUsers[0];

        // Create Products
        await Product.bulkCreate(products);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Clears everything

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
