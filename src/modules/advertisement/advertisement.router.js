import { Router } from "express";
import * as advertisementControllar from './advertisement.controllar.js';
import { auth } from "../../middleware/auth.middleware.js";
import { endPoint } from "./advertisement.role.js";


const router = Router();

router.post('/addAdvertisement', auth(endPoint.add), advertisementControllar.addAdvertisement);
router.put('/updateAdvertisementById', auth(endPoint.update), advertisementControllar.updateAdvertisementById);
router.get('/displayAdvertisement', auth(endPoint.get), advertisementControllar.displayAdvertisement);
router.get('/displayAdvertisementById', auth(endPoint.get), advertisementControllar.displayAdvertisementById);


export default router