import mongoose from "mongoose";

const cachedConnection = (global as any).mongoose || { conn: null, promise: null }
const MONGODB_URL = process.env.MONGODB_URL

export const connectToDatabase = async () => {
    if (cachedConnection.conn) {
        return cachedConnection.conn
    }
    if (!MONGODB_URL) {
        throw new Error("Admin must provide MONGODB_URL")
    }
    cachedConnection.promise = cachedConnection.promise || mongoose.connect(MONGODB_URL, {
        dbName: "speakupnigeria",
        bufferCommands: false,
        connectTimeoutMS: 30000,
    })

    cachedConnection.conn = await cachedConnection.promise
    console.log("DATABASE connected")
    return cachedConnection.conn
}