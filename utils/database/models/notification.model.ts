import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
        required: true
    },
    notificationType: {
        type: String,
        enum: ['upvote', 'comment'],
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

export const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema)