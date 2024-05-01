import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const OrderSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
    },
    orderTracking: [{
        productTracking: {
            product: {
                type: Types.ObjectId,
                ref: 'Product'
            },
            status: {
                type: String,
                enum: ['processing', 'shipping', 'enroute', "arrived"],
                default: 'processing'
            },
            timeRemaining: {
                type: String
            }
        }
    }],
    totalPrice: {
        type: Number,
        
    }
}, {
    timestamps: true
});

const orderModel = model('Order', OrderSchema);

export default orderModel;
