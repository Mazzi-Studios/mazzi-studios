import { Router, type IRouter } from "express";
import healthRouter from "./health";
import wordpressRouter from "./wordpress";

const router: IRouter = Router();

router.use(healthRouter);
router.use(wordpressRouter);

export default router;
