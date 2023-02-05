import express from 'express';
import { addVideo, addView, deleteVideo, getByTag, getVideo, randomVideo, search, subscribedVideo, trendVideo, updateVideo } from '../controllers/video.js';
import {verifyToken} from '../middleware/verifyToken.js'

const router = express.Router();

//create a video
router.post('/',verifyToken, addVideo);

//update a video
router.put('/:id',verifyToken, updateVideo);

//delete a video
router.delete('/:id',verifyToken, deleteVideo);

//get videos
router.get('/find/:id', getVideo);

//view videos
router.put('/view/:id', addView);

//get trending videos
router.get('/trend', trendVideo);

//get random videos
router.get('/random', randomVideo);

//get subscribed videos
router.get('/sub',verifyToken, subscribedVideo);

//get videos by tags
router.get('/tags', getByTag);

//search videos
router.get('/search', search);


export default router;