import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const RecommendationProductSchema = new Schema({

    userId : {
        type : Types.ObjectId,
        ref : 'User',
    },
    product : [{
        URL: { type: String },
        Title: { type: String },
        ImageURL: { type: String},
        Rating: { type: String},
        Price: { type: Number },
        ReviewCount: { type: Number },
        PriceCategory: { type: String},
    }]
  

},{
    timestamps : true
})

const RecommendationProductModel = model('RecommendationProduct',RecommendationProductSchema)

export default RecommendationProductModel;