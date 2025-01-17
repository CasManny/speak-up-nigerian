import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema({
  whoCreatedTheReportId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  issueType: {
    type: String,
    enum: [
      "infrastructure",
      "education",
      "unemployment",
      "security",
      "governance",
      "transportation",
      "social-issues",
      "economic-issues",
    ],
    required: true,
  },
  reportedComplain: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["submitted", "in progress", "resolved", "closed"],
    default: "submitted",
  },
  photos: [
    {
      type: String,
    },
  ],
  upvote: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  commentsOnReports: [
    {
      commentorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, { timestamps: true});

export const Report =
  mongoose.models.Report || mongoose.model("Report", reportSchema);
