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

export const getAllReports = async () => {
    try {
        await connectToDatabase()

        const reports = await Report.find().select("-__v").sort({createdAt: "desc"}).populate({
            path: "whoCreatedTheReportId",
            select: "fullName state lga userRole profilePicture"
        })

        return reports.map((report) => ({
            _id: report._id.toString(),
            whoCreatedTheReportId: {
              _id: report.whoCreatedTheReportId._id.toString(),
              userRole: report.whoCreatedTheReportId.userRole,
              profilePicture: report.whoCreatedTheReportId.profilePicture,
              fullName: report.whoCreatedTheReportId.fullName,
              lga: report.whoCreatedTheReportId.lga,
              state: report.whoCreatedTheReportId.state,
            },
            issueType: report.issueType,
            reportedComplain: report.reportedComplain,
            status: report.status,
            photos: report.photos,
            upvote: report.upvote,
            commentsOnReports: report.commentsOnReports,
            createdAt: report.createdAt,
            updatedAt: report.updatedAt,
        }))
    } catch (error: any) {
     throw new Error(error.message)   
    }
}