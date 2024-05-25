import {auth} from '../../middleware/auth.middleware.js';
import * as locationControllar from './location.controllar.js'
import { Router } from "express";
const router = Router();

router.post('/addLocation',auth,locationControllar.addlocation)
router.get('/displatLocation',auth,locationControllar.displayLocation)
router.put('/updateLocation',auth,locationControllar.updateLocation)

export default router;