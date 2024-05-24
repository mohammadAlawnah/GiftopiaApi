import { Router } from "express";
import * as coponControllar from "./copon.controllar.js";

const router = Router();

router.post('/updateCopon', coponControllar.updateCopon)
router.post('/getAllCopons', coponControllar.getAllCopon)
router.post('/createCopon', coponControllar.createCopon)
router.get('/getCopon', coponControllar.getCopon)
router.delete('/deleteCopon', coponControllar.deleteCopon)


export default router;
