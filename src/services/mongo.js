const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.once('open', () => {
    console.log('Conneced to MongoDB');
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})

async function connectToMongo() {
    await mongoose.connect(process.env.MONGO_URL)
}

async function disconnectFromMongo() {
    await mongoose.disconnect();
}

module.exports = { connectToMongo, disconnectFromMongo }