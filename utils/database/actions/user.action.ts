"use server"
// https://avatar.iran.liara.run/public/boy?username=john
// https://avatar.iran.liara.run/public/girl?username=vivian

import { ICreateUser, IUpdateUser } from "@/types"
import { connectToDatabase } from "../connect"
import { User } from "../models/user.model"


export const createUser = async ({id, username, email, image_url}:ICreateUser) => {
    try {
        await connectToDatabase()
        const newUser = new User({
            clerkId: id,
            username: username,
            email: email,
            profilePicture: image_url
        })

        await newUser.save()
        return newUser

    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const getUserByClerkId = async ({clerkId}: {clerkId: string}) => {
    try {
        await connectToDatabase()
        const user = await User.findOne({ clerkId: clerkId })
        return user
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const updateUser = async ({clerkId, fullName, state, userRole, lga, gender, dateOfBirth, onboarded, profilePicture }:IUpdateUser) => {
    try {
        await connectToDatabase()
        const user = await User.updateOne({ clerkId: clerkId }, { fullName, state, userRole, lga, gender, dateOfBirth, onboarded, profilePicture })
    } catch (error: any) {
        throw new Error(error.message)
    }
}