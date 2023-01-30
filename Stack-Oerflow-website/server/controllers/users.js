import mongoose from "mongoose";
import  User from '../models/auth.js'

export const getAllUsers = async(req,res) => {
    try {
        const allUsers = await User.find();
        const allUserDetails = []
        allUsers.forEach(Users =>
            allUserDetails.push({
                _id: Users.id,
                name: Users.name,
                about: Users.about,
                tags: Users.tags,
                joinedOn: Users.joinedOn
            })
        )
        res.status(200).json(allUserDetails)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}