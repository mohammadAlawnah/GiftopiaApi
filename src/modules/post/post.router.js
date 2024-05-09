import { Router } from "express";
import * as postControllar from './post.controllar.js'
import auth from "../../middleware/auth.middleware.js";
const router = Router();

router.post('/addNewPost',auth,postControllar.addNewPost);
router.get('/displayAllPosts',postControllar.displayAllPosts);
router.get('/displayUserAllPosts',auth,postControllar.displayUserAllPosts);
router.put('/updatePost',auth,postControllar.updatePost);
router.delete('/deletePost',auth,postControllar.deletePost);

export default router;