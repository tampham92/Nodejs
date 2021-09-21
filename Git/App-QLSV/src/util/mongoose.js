// module.exports = {
//     mutipleMongooseToObject: function(mongooses) {
//         return mongooses.map(mongoose => mongoose.toObject())
//     },

//     mongooseToObject: function(mongoose) {
//         return mongoose ? mongoose.toObject() : mongoose
//     }
// }

module.exports = {
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(function(mongoose) {
            return mongoose.toObject()
        })
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}