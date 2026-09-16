import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongooDB conected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
}

export default connectDB