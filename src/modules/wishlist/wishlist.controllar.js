// Mohammad Shawahni
import e from "express";
import wishListModel from "../../../DB/model/WishList.model.js";
import productModel from "../../../DB/model/Product.model.js";

export const addWishList = async (req, res) => {
    const { productId } = req.body;
    const product = await productModel.findOne({ _id: productId });
    
    if (!product) {
        return res.json({ message: 'product not found' })
    }

    const checkWishLost = await findOne({ productId })
    if (checkWishLost) {
        return res.json({ message: "the item is wishList" })
    }

    const wishlist = await wishListModel.create({ userId: req.user._id });
    
    return res.json({ message: "succsess", wishlist })
    
};


export const getWishList = async (req, res) => {
    
    const List = await wishListModel.findOne({ userId: req.user._id });

    if (!List) {
        return res.json({ message: "WishList empty" })
    }

    return res.json({ message: 'succsess', List });
    
};