import mongoose, { Schema, Types, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    finalPrice: {
        type: Number,
    },
    mainImage: {
        type: Object,
        required: true,
    },
    subImages: [{
        type: Object,
    }],
    status: {
        type: String,
        default: 'Active',
        enum: ['Active', 'NotActive'],
    },
    sizez: {
        type: String,
        enum: ['s', 'm', 'lg', 'xl']
    },
    colors: [String],
    categoryId: {
        type: Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    subcategoryId: {
        type: Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    },
    createdBy: { type: Types.ObjectId, ref: 'User' },
    updatedBy: { type: Types.ObjectId, ref: 'User' },
    rate: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
}, {
    timestamps: true,
});

const productModel = model('Product', productSchema);
export default productModel;
