import book from "../model/book.js";

class bookController {
    static async listBooks(req, res) {
        const books = await book.find({});
        res.status(200).json(books);
    };

    static async addBook(req, res) {
        try{
            const newBook = await book.create(req.body);
            res.status(200).json({message: "Book created", book: newBook})

        } catch (error){
            res.status(500).json({message: `${error.message}`})
        }
    };
}

export default bookController;