import { Router } from "express";
import * as postControllar from './post.controllar.js'
const router = Router();

router.post('/addNewPost',postControllar.addNewPost);
router.get('/displayAllPosts',postControllar.displayAllPosts);
router.put('/updatePost',postControllar.updatePost);
router.delete('/deletePost',postControllar.deletePost);

export default router;