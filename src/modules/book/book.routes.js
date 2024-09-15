import { Router } from "express";
import { createBook, deleteBook, getAllBook, getBookById, updateBook } from "./book.controller.js";
const bookRouter = Router();

bookRouter.post("/book" , createBook);
bookRouter.get("/book" , getAllBook);
bookRouter.get("/book/:id" , getBookById);
bookRouter.patch("/book/:id" , updateBook);
bookRouter.delete("/book/:id" , deleteBook);


export default bookRouter;