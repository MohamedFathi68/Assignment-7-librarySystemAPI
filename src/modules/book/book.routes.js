import { Router } from "express";
const bookRouter = Router();

bookRouter.get("/book", userRouter);

export default bookRouter;