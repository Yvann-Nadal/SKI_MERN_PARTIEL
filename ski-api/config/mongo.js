const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery', false);

console.log(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}`);
module.exports = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}`)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB', error.message)
    }
}