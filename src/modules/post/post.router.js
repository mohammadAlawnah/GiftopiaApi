import { Router } from "express";
import * as postControllar from './post.controllar.js'
import { auth } from "../../middleware/auth.middleware.js";
import { endPoints } from "./post.role.js";
const router = Router({caseSensitive:true});

router.post('/addNewPost',auth(endPoints.add),postControllar.addNewPost);
router.get('/displayAllPosts',auth(endPoints.display),postControllar.displayAllPosts);
router.get('/displayUserAllPosts',auth(endPoints.display),postControllar.displayUserAllPosts);
router.put('/updatePost',auth(endPoints.update),postControllar.updatePost);
router.delete('/deletePost',auth(endPoints.delete),postControllar.deletePost);

export default router;