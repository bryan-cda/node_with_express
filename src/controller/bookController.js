import book from "../model/book.js";

class bookController {
    static async listBooks(req, res) {
        try {
            const books = await book.find({});
            res.status(200).json(books);
        } catch(error){
            res.status(500).json(`${error} - error on execute request to find all books`);
        }   
    };

    static async addBook(req, res) {
        try{
            const newBook = await book.create(req.body);
            res.status(201).json({message: "successfully created", book: newBook});
        } catch (error){
            res.status(500).json({message: `${error.message} - error when attempt to add book: ${req.body}`});
        }
    };

    static async findBookById(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(`update execute for book: ${bookFound}`);
        } catch(error){
            res.status(500).json(`${error.message} - error on attempt to search book by id: ${req.params.id}`)
        }
    };

    static async updateBook(req, res){
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).send("the book has been updated successfully");
        } catch(error){
            res.status(500).json(`${error.message} - error on attempt to update book: ${req.body}`)
        }
    };

    static async deleteBook(req, res){
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).send("book has been deleted successfully")
        } catch (error){
            res.status(500).json(`${error.message} - error on attempt to delete book by id: ${req.params.id}`)
        }
    }
}

export default bookController;