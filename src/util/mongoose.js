module.exports = {
    mutipleMongooseToObject: function(mongooseArray){
        return mongooseArray.map(mongooseArr => mongooseArr.toObject())
    },

    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}