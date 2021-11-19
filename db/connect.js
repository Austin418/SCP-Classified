const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log("connected to the SCP database"))
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB