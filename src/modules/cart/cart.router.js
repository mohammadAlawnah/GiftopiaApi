import { Router } from "express";
import * as cartControllar from './cart.controllar.js'
const router = Router();

router.patch('/incrementItemQuantityInCart',cartControllar.incrementItemQuantityInCart);
router.patch('/decrementItemQuantityInCart',cartControllar.decrementItemQuantityInCart);
router.delete('/removeItemFromCart',cartControllar.removeItemFromCart);
router.post('/addItemToCart',cartControllar.addItemToCart);

export default router;