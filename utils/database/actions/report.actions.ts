"use server"

import { ICreateReport } from "@/types"
import { connectToDatabase } from "../connect"
import { Report } from "../models/report.model"
import { User } from "../models/user.model"

export const createReport = async ({userId, state, issueType, reportedComplain}:ICreateReport) => {
    try {
        await connectToDatabase()
        const user = await User.findById(userId)
        const newReport = new Report({
            whoCreatedTheReportId: userId,
            state: state,
            issueType: issueType,
            reportedComplain: reportedComplain
        })

        user.reportedComplains.push(newReport._id)

        Promise.all([
            await user.save(),
            await newReport.save()
        ])

    
    } catch (error: any) {
     throw new Error(error.message)   
    }
}