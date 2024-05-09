import e from 'express'
import favoritesModel from '../../../DB/model/Favorites.model.js'
import userModel from '../../../DB/model/User.model.js'
import productModel from '../../../DB/model/Product.model.js'


export const addFavorites = async(req,res)=>{
    
    const {UserId} = req.user._id;
    const newFavoriteUserModel = await userModel.findOne({UserId});
    //const newFavoriteProductModel = await productModel.findOne({ProductId});
    if(!newFavoriteUserModel){
        await favoritesModel.create({userId: req.user._id, productId: req.params.id})
        return res.json({message: 'success'})
    }else {
        return res.json({message: 'the product is favorite'})
    }
}


export const deleteFavorites = async(req,res)=>{
    const {productId} = req.body;
    const deletefavorites = await favoritesModel.findOne({productId});
    if(deletefavorites){
        await favoritesModel.deleteOne({_id: deletefavorites._id})
        return res.json({message: 'the product remove frome favorites'})
    }else{
        return res.json({message: 'the product is not found'})
    }
}