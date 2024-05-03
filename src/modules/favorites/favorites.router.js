import { Router } from "express";
import * as favoritesControllar from './favorites.controllar.js'
import auth from "../../middleware/auth.middleware.js";

const router = Router();

router.post('/addFavorites',favoritesControllar.addFavorites)
router.post('/deleteFavorites',favoritesControllar.deleteFavorites)

export default router