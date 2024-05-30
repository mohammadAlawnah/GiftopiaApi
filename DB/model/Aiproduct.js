import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const AiSchema = new Schema({
    URL: { type: String },
    Title: { type: String },
    ImageURL: { type: String},
    Rating: { type: String},
    Price: { type: Number },
    ReviewCount: { type: Number },
    PriceCategory: { type: String},
    ocr : { 
        type : String,
        enum : ['valentine','birthday'],
    }, 

},{
    timestamps : true
})

const AiProductModel = model('AiProduct',AiSchema)

export default AiProductModel;