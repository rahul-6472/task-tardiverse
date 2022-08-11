const mongoose = require ("mongoose")

const allBoooksSchema = new mongoose.Schema ({
    tittle: {
        type :String,
        required:true
    },
    author: {
        type:String,
        require:true
    }
})

const allBooks = mongoose.model("allBooks", allBoooksSchema )

module.exports = allBooks

