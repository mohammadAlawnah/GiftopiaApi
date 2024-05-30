import { Router } from "express";
import * as TrackingController from "./Tracking.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
import { endPoint } from "./Tracking.role.js";
const router =Router();
router.get('/display',auth(endPoint.display),TrackingController.DisplayTracking);
router.post('/add/',auth(endPoint.add),TrackingController.addTracking);
router.patch('/update',auth(endPoint.update),TrackingController.editStatus);
router.delete('/delete',auth(endPoint.delete),TrackingController.deleteTracking);
export default router;