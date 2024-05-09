import { Router } from "express";
import * as OrderController from "./order.controller.js"
import auth from "../../middleware/auth.middleware.js";
const router =Router();
router.get('/display',auth,OrderController.DisplayTraking);
router.post('/add/:product',auth,OrderController.addTraking);
router.patch('/update',OrderController.editStatus);
router.delete('/delete/:product',OrderController.deleteTraking);
export default router;