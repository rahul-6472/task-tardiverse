const mongoose = require("mongoose")

async function connectDatabase () {
    let dbUri = "mongodb://localhost:27017/books"

    try {
        await mongoose.connect(dbUri)
        console.log("db connection succesfull!")
    } catch (ex) {
        console.log("db conection unsuccessfull", ex.info)
        throw ex
    }
}

module.exports = connectDatabase