const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://appQlsv_user:bIJNlpBfL8okiold@cluster0.qr7sp.mongodb.net/appQlsv_01?retryWrites=true&w=majority', {
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

//
//bIJNlpBfL8okiold appQlsv_user