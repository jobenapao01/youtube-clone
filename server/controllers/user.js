import mongoose from 'mongoose';
import User from '../models/User.js'
import Video from '../models/Video.js'
import { createError } from "../middleware/error.js";

export const updateUser = async (req,res,next) => {
      if(req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});

            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
      }else {
        return next(createError(403, "You cant update others account."))
      }; 
  
}
export const deleteUser = async (req,res,next) => {
    if(req.params.id === req.user.id) {
        try {
             await User.findByIdAndDelete(req.params.id);

            res.status(200).json("User Deleted Successfully.");
        } catch (error) {
            next(error);
        }
      }else {
        return next(createError(403, "You cant delete others account."))
      }; 
}
export const getUser = async (req,res,next) => {
    try {
      const user = await User.findById(req.params.id);
    
      res.status(200).json(user);

    } catch (error) {
        next(error)
    }
}
export const subscribe = async (req,res,next) => {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $push: {subscribedUsers: req.params.id}
      });

      await User.findByIdAndUpdate(req.params.id, {
        $inc: {subscribers: 1}
      });

      res.status(200).json("Subscribed");

    } catch (error) {
        next(error)
    }
}

export const unSubscribe = async (req,res,next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: {subscribedUsers: req.params.id}
          });
    
          await User.findByIdAndUpdate(req.params.id, {
            $inc: {subscribers: -1}
          });
    
          res.status(200).json("Unsubscribed");
    } catch (error) {
        next(error)
    }
}
export const like = async (req,res,next) => {
    const id = req.user.id
    const videoId = req.params.videoId

    try {
      await Video.findByIdAndUpdate(videoId, {
        //$addToSet to make sure you only push the same user id once in the array
        $addToSet: { likes: id},
        //remove user id in dislikes array when user liked a video
        $pull: { dislikes:id}
      })

      res.status(200).json("Video liked")
    } catch (error) {
        next(error)
    }
}
export const dislike = async (req,res,next) => {
    const id = req.user.id
    const videoId = req.params.videoId
    try {
      await Video.findByIdAndUpdate(videoId, {
        //$addToSet to make sure you only push the same user id once in the array
        $addToSet: { dislikes: id},
        //remove user id in likes array when user disliked a video
        $pull: { likes:id}
      })

      res.status(200).json("Video disliked")
    } catch (error) {
        next(error)
    }
}
