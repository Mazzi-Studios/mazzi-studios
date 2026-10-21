import { Router, type IRouter } from "express";
import healthRouter from "./health";
import wordpressRouter from "./wordpress";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(wordpressRouter);
router.use(contactRouter);

export default router;
