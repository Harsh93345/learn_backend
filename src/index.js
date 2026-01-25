// require("dotenv").config({path: './.env'}); 
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>
    {
        console.log(`server running on port: ${process.env.PORT}`);
    })
})
.catch((err)=> (
    console.log("mongodb connection failed: ", err)
))























// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err)=>{
//             console.error("SERVER ERROR: ", err)
//             throw err
//         })
//
//         app.listen(process.env.PORT || 8000, ()=>{
//             console.log(`server running on port: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })() // IIFE