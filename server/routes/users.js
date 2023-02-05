import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unSubscribe, updateUser } from '../controllers/user.js';
import {verifyToken} from '../middleware/verifyToken.js';

const router = express.Router()

//update user
router.put('/:id',verifyToken, updateUser)

//delete user
router.delete('/:id', verifyToken, deleteUser)

//get user
router.get('/find/:id', getUser)

//subscribe a user
router.put('/sub/:id', verifyToken, subscribe)

//unsubscribe a user
router.put('/unsub/:id', verifyToken, unSubscribe)

//like a video
router.put('/like/:videoid', verifyToken, like)

//dislike a video
router.put('/dislike/:videoid', verifyToken, dislike)


export default router;