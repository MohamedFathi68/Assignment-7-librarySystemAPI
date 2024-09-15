import { Router } from "express";
import { createAuthor, deleteAuthor, getAllAuthor, getAuthorById, updateAuthor } from "./author.controller.js";
const authorRouter = Router();

authorRouter.post("/author", createAuthor);
authorRouter.get("/author", getAllAuthor);
authorRouter.get("/author/:id", getAuthorById);
authorRouter.patch("/author/:id", updateAuthor);
authorRouter.delete("/author/:id", deleteAuthor);

export default authorRouter;