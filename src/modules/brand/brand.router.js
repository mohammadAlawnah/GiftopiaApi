import { Router } from "express";
import * as brandControllar from "./brand.controllar.js"


const router = Router();

router.post('/editBrand',brandControllar.editBrand)
router.get('/displayBrand',brandControllar.displayBrand)
router.post('/addBrand',brandControllar.addBrand)
router.post('/deleteBrand',brandControllar.deleteBrand)

export default router;
