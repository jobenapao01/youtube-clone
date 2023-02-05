import mongoose from 'mongoose'
import { createError } from '../middleware/error.js'
import Comment from '../models/Comment.js'
import Video from '../models/Video.js'

export const addComment = async (req,res,next) => {
    const newComment = new Comment({
        ...req.body,
        userId: req.user.id
    })

    try {
       const savedComment = await newComment.save()

       res.status(200).json(savedComment)
    } catch (error) {
        next(error)
    }
}

export const deleteComment = async (req,res,next) => {

    try {
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id)

        //Check if user is the author of the comment or the user is the owner of the video before deleting comment
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            
            res.status(200).json("Comment deleted.")
        }else {
            next(createError(403, "You can only delete your own comment."))
        }
    } catch (error) {
        next(error)
    }
}

export const getComments = async (req,res,next) => {
    try {
        const comments = await Comment.find({videoId: req.params.videoId})

        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}