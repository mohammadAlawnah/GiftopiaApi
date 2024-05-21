import { Router } from "express";
import * as advertisementControllar from './advertisement.controllar.js';


const router = Router();

router.post('/addAdvertisement', advertisementControllar.addAdvertisement);
router.put('/updateAdvertisementById', advertisementControllar.updateAdvertisementById);
router.get('/displayAdvertisement', advertisementControllar.displayAdvertisement);
router.get('/displayAdvertisementById', advertisementControllar.displayAdvertisementById);


export default router