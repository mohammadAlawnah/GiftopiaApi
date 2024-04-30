import { Router } from "express";
import * as cartControllar from './cart.controllar.js'
const router = Router();

router.post('/incrementItemQuantityInCart',cartControllar.incrementItemQuantityInCart);
router.post('/decrementItemQuantityInCart',cartControllar.decrementItemQuantityInCart);
router.post('/removeItemFromCart',cartControllar.removeItemFromCart);
router.post('/addItemToCart',cartControllar.addItemToCart);

export default router