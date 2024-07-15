"use server"

import { ICreateReport } from "@/types"
import { connectToDatabase } from "../connect"
import { Report } from "../models/report.model"

export const createReport = async ({userId, state, issueType, reportedComplain}:ICreateReport) => {
    try {
        await connectToDatabase()
        const newReport = new Report({
            whoCreatedTheReportId: userId,
            state,
            issueType,
            reportedComplain,
        })
        await newReport.save()
    
    } catch (error: any) {
     throw new Error(error.message)   
    }
}