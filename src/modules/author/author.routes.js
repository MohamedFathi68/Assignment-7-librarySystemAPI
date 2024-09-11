import { Router } from "express";
const authorRouter = Router();

authorRouter.get("/author", userRouter);

export default authorRouter;