import { Router } from "express";
import bookRouter from "./book/book.routes.js";
import authorRouter from "./author/author.routes.js";
const bootstrap = Router();

bootstrap.use("/v1", bookRouter);
bootstrap.use("/v1", authorRouter);

export default bootstrap;