import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'
import { createError } from '../middleware/error.js';


export const signUp = async (req,res,next) =>{
    try {
        const salt =  bcrypt.genSaltSync(10);
        const hash =  bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});
        
        await newUser.save();
        res.status(200).send('User created successfully.');
     
    } catch (error) {
        next(error);
    }
}
export const signIn = async (req,res,next) =>{
    try {
       const user = await User.findOne({name: req.body.name});

       if(!user) return next(createError(404, "User not found."));

       //Check if password is correct
       const isCorrect = await bcrypt.compare(req.body.password, user.password);

       if(!isCorrect) return next(createError(400, "Wrong credentials."));
        
       const token = jwt.sign({id: user._id},
        process.env.JWT_SECRET
       );

       const {password, ...others} = user._doc;

       res.cookie("access_token", token, {
        httpOnly: true
       }).status(200).json(others);

    } catch (error) {
        next(error);
    }
}