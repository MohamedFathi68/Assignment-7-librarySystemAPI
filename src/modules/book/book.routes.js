import { Router } from "express";
import { createBook } from "./book.controller.js";
const bookRouter = Router();

bookRouter.post("/book" , createBook);

export default bookRouter;