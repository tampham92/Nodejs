const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/QuanLySV', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connection successfully!')
    } catch (error) {
        console.log('Connection fail!')
    }
}

module.exports = { connect }