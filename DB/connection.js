import mongoose from "mongoose";

export const connectDB = async()=>{
    return await mongoose.connect(`${process.env.DB}/Giftopia`)
    .then(result=>{
        console.log('connected')
    }).catch(error=>{
        console.log('error connect DB')
    })
}