import { Router } from "express";
import * as OrderController from "./order.controller.js"
const router =Router();

router.get('/display',OrderController.DisplayTraking);
router.post('/add/:product',OrderController.addTraking);
router.patch('/update/:product',OrderController.editStatus);
router.delete('/delete/:product',OrderController.deleteTraking);

export default router;
