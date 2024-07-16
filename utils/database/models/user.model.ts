import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      unique: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
   
    state: {
      type: String,
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
      enum: ["male", "female"],
    },
    accountStatus: {
      type: String,
      enum: ["active", "suspended", "deactivated"],
      default: "active",
    },
    reportedComplains: [
      {
        type: mongoose.Schema.Types.ObjectId,
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

export const User = mongoose.models.User ||  mongoose.model("User", userSchema)