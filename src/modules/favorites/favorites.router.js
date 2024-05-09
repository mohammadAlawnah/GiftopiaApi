import { Router } from "express";
import * as favoritesControllar from "./favorites.controllar.js"
import auth from "../../middleware/auth.middleware.js";

const router = Router();

router.post('/addFavorites/:id',auth,favoritesControllar.addFavorites)
router.post('/deleteFavorites/:id',auth,favoritesControllar.deleteFavorites)

export default router;