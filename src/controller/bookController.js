import book from "../model/book.js";

class bookController {
  
    static async listBooks(req, res) {
        try {
            const books = await book.find({});
            res.status(200).json(books);
        } catch(error){
            res.status(500).json(`${error} - error on request`)
        }   
    };

    static async addBook(req, res) {
        try{
            const newBook = await book.create(req.body);
            res.status(200).json({message: "Book created", book: newBook})

        } catch (error){
            res.status(500).json({message: `${error.message} - error when add book: ${req.body}`})
        }
    };

    static async findBookById(req, res) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook);
        } catch(error){
            res.status(500).json(`${error.message} - error on search book by id: ${req.body.id}`)
        }
    };

    static async updateBook(req, res){
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json(updatedBook);
        } catch(error){
            res.status(500).json(`${error.message} - error on update book: ${req.body}`)
        }
    }
}

export default bookController;