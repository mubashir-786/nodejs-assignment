const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost:27017"
// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true})

module.exports = mongoose
