import book from "../model/book.js";
import { authors } from "../model/author.js";

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
        const bookRequest = req.body;

        try{
            const foundAuthor = await authors.findById(bookRequest.author);

            if(foundAuthor){
                const newBook = await book.create({...bookRequest, author: {
                    name: foundAuthor.name,
                    biography: foundAuthor?.biography,
                }});

            const createdBook = await book.create(newBook);
            res.status(201).json({message: "successfully created", book: createdBook});
            }

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

    static async findBookByPublishCompany(req, res){
        const publishing_company = req.query.publishing_company;
        try{
            const foundBooks = await book.find({publishing_company: publishing_company});
            console.log(foundBooks.name);
            res.status(200).json(foundBooks);
            console.log(publishCompany);
        }catch(error){
            res.status(500).send(`${error} - error on attempt to find book by publush company`)
        }
    }
}

export default bookController;