import { Router } from "express";
import * as OrderController from "./order.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
import { endPoint } from "./order.role.js";
const router =Router();
router.get('/display',auth(endPoint.display),OrderController.DisplayTracking);
router.post('/add/',auth(endPoint.add),OrderController.addTracking);
router.patch('/update',auth(endPoint.update),OrderController.editStatus);
router.delete('/delete',auth(endPoint.delete),OrderController.deleteTracking);
export default router;