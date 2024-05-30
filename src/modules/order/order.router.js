import { Router } from "express";
import * as couponControllar from './order.controllar.js';
import { auth } from "../../middleware/auth.middleware.js";
import { endPoints } from "./order.role.js";


const router = Router();

router.post('/',auth(endPoints.create),couponControllar.create)

export default router
