import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected: !! DB HOST: ${connection.connection.host}`);// connection instance kya hota hai check karna hai
    }catch (error){
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;