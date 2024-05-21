//import { types } from "joi";
//import { required } from "joi";
import mongoose, { Mongoose, model } from "mongoose";

const {Schema} = mongoose;

const FriendSchema = new Schema({
    // id: {
    //     type: String,
    //     required: true,
    // },
    name: {
        type: String,
        required: true,
    },
    addBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
    }
});

const friendModel = model("Friend", FriendSchema);

export default friendModel;
