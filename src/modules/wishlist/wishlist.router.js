// Mohammad Shawahni
import { Router } from "express";
import * as wishlistControllar from './wishlist.controllar.js';
import { endPoint } from "./wishlist.role.js";
import { auth } from "../../middleware/auth.middleware.js";


const router = Router();

router.post('/addWishList', auth(endPoint.add), wishlistControllar.addWishList);
router.get('/getWishList', auth(endPoint.get), wishlistControllar.getWishList);

export default router