import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const FriendSchema = new Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    }
});

const friendModel = model("Friend", FriendSchema);

export default friendModel;