const mongoose = require("mongoose")

// const mongoURI = 'mongodb+srv://sherii:sherii47@cluster0.ne9g0n1.mongodb.net/test';
const mongoURI = "mongodb://localhost:27017"
// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true})

module.exports = mongoose