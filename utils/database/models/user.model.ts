import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
    },
    userRole: {
      type: String,
      enum: ["citizen", "government official"],
      default: "citizen",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    accountStatus: {
      type: String,
      enum: ["active", "suspended", "deactivated"],
      default: "active",
    },
    reportedComplains: [
      {
        type: Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
    onboarded: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
