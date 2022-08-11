const allBooks = require("../Database/allBooks.js")

async function searchBooks (req,res,next) {

   
    let book = await allBooks.find({
        "$or":[
            {"name": {$regex:req.params.key}}
        ]
    })

    return res.send({
        data:book
    })
}

async function addToPersonalList (req,res,next){
    const {id} = req.params

    const book = await allBooks.findById(id)
     
    if(book){

        
        return res.send({
            data: book
        })
    }
    else{
        return res.status.send({
            msg:"movie with id doesnot exists"
        })
    }
}

async function createBook (req,res,next) {
  const {book:bookData} = req.body
  
  let book = new allBooks(bookData)

  await book.save()
  return res.send({
    message: "book has been added",
    data: book,
  });
}




module.exports = {
    searchBooks,
    createBook,
    addToPersonalList
}