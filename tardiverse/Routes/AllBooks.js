const express = require("express")
const { searchBooks, createBook, addToPersonalList } = require("../Handlers/AllBooks")

const AllBooksrouter = express.Router()

AllBooksrouter.get ("/search/:key",searchBooks)
AllBooksrouter.post("/createBook", createBook)
AllBooksrouter.get ("/allBooks/:id", addToPersonalList)

module.exports = AllBooksrouter