import { Router } from "express";
import * as authControllar from './auth.controllar.js'
const router = Router();

router.post('/signUp',authControllar.signUp);
router.post('/signIn',authControllar.signIn);
router.get('/co/:token',authControllar.confarmEmail)
router.patch('/resetPassword',authControllar.resetPassword);


export default router