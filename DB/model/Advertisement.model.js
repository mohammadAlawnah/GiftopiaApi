import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const AdvertisementSchema = new Schema({
    id: {
        type: String,
        require: true,
    },
    publisher_name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    display_date: {
        type: String,
        require: true,
    },
    budget: {
        type: Number,
        require: true,
    },
    cost_per_click: {
        type: Number,
        require: true,
    },
    cost_per_impression: {
        type: Number,
        require: true,
    },
    geographic_location: {
        type: String,
        require: true,
    }
});

const advertisementModel = model("Advertisement", AdvertisementSchema);

export default advertisementModel;
