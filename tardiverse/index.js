const express = require ("express")
const connectDatabase = require("./Database")
const AllBooksrouter = require("./Routes/AllBooks")

const app = express()
const port = 3001

app.use(express.json())


app.use(AllBooksrouter)

connectDatabase().then(() => {
    app.listen(port, ()=> {
        console.log("server running at http://localhost:3001")
    })
})
