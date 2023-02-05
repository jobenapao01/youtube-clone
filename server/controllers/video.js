import mongoose from 'mongoose'
import { createError } from '../middleware/error.js';
import Video from '../models/Video.js'
import User from '../models/User.js'

export const addVideo = async (req,res,next) => {
    const newVideo = new Video({userId: req.user.id, ...req.body});

    try {
        const saveVideo = await newVideo.save();

        res.status(200).json(saveVideo);

    } catch (error) {
        next(error)
    }
}

export const updateVideo = async (req,res,next) => {
    try {   
        const video = await Video.findById(req.params.id);

        if(!video) return next(createError(404, "Video not found."));

        if(req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});

            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, "You can only update your own video."));
        }

    } catch (error) {
        next(error)
    }
}

export const deleteVideo = async (req,res,next) => {
    try {

        const video = await Video.findById(req.params.id);

        if(!video) return next(createError(404, "Video not found."));

        if(req.user.id === video.userId) {
           await Video.findByIdAndDelete(req.params.id, {
                $set: req.body
            }, {new: true});

            res.status(200).json("Video deleted succesfully.");
        } else {
            return next(createError(403, "You can only delete your own video."));
        }
        
    } catch (error) {
        next(error)
    }
}

//get all videos by id
export const getVideo = async (req,res,next) => {
    try {
        const videos = await Video.findById(req.params.id)

        res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}

//add view count
export const addView = async (req,res,next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views: 1}
        })

        res.status(200).json("The view has been increased.")

    } catch (error) {
        next(error)
    }
}

//get random videos
export const randomVideo = async (req,res,next) => {
    try {
        const videos = await Video.aggregate([{$sample: {size: 40}}])

        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

//get trending videos
export const trendVideo = async (req,res,next) => {
    try {
        const videos = await Video.find().sort({views: -1})

        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

//get subscribed channels video
export const subscribedVideo = async (req,res,next) => {
    try {
         const user = await User.findById(req.user.id)

         const subscribedChannels = user.subscribedUsers
        
         //loop through all subscribed users and get videos
         const list = await Promise.all(
            subscribedChannels.map(channelId => {
                return Video.find({userId: channelId })
            })
         )

         res.status(200).json(list.flat().sort((a,b) => b.createdAt - a.createdAt))
    } catch (error) {
        next(error)
    }
}

//search video by tags
export const getByTag = async (req,res,next) => {
    const tags = req.query.tags.split(",")
    try {
        const videos = await Video.find({ tags: {$in: tags} }).limit(20)
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    
    }
}
//search video
export const search = async (req,res,next) => {
        const query = req.query.search
    try {
        const videos = await Video.find({
            title: {$regex: query, $options: "i"}
        }).limit(40);

        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}