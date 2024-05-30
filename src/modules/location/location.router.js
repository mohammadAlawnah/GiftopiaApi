// This code is written by Reema Kusa
import {auth} from '../../middleware/auth.middleware.js';
import * as locationControllar from './location.controllar.js'
import { Router } from "express";
import { endPoint } from './location.role.js';

const router = Router();

router.post('/addLocation', auth(endPoint.add), locationControllar.addlocation);
router.get('/displayLocation/:locationId', auth(endPoint.display), locationControllar.displayLocation);
router.put('/updateLocation/:locationId', auth(endPoint.update), locationControllar.updateLocation);

export default router;
