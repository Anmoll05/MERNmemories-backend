import express from 'express';
import {getPosts , createPost , updatePost , getPost , deletePost , likePost} from '../controllers/posts.js'
const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/' ,getPosts );
router.post('/' ,auth , createPost );
router.get('/:id', auth , getPost);
router.patch('/:id', auth , updatePost);
router.delete('/:id',auth , deletePost);
router.patch('/:id/likePost', auth ,likePost);


export default router;