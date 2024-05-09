import cartModel from "../../../DB/model/Cart.model.js";

export const incrementItemQuantityInCart = async(req,res)=>{
        const {_id , productId} = req.body;
        const cart = await cartModel.findOne({_id: _id}) 

        if (!cart){
            return res.status(404).send('Cart not found');
        }else{
            
            await cartModel.updateOne(
                { _id: _id, 'products.productId': productId },
                { $inc: { 'products.$.quantity': 1 } }
            );

            return res.status(200).send('Cart successfully updated')
        }
};

export const decrementItemQuantityInCart = async(req,res)=>{
        const {_id , productId} = req.body;
        const cart = await cartModel.findOne({_id: _id}) 

        if (!cart){
            return res.status(404).send('Cart not found');
        }else{
            
            await cartModel.updateOne(
                { _id: _id, 'products.productId': productId },
                { $inc: { 'products.$.quantity': -1 },}
            );

            return res.status(200).send('Cart successfully updated')
        }
};


export const removeItemFromCart = async(req,res)=>{
        const {_id , productId} = req.body;
        const cart = await cartModel.findOne({_id: _id}) 

        if (!cart){
            return res.status(404).send('Cart not found');
        }else{
            
            await cartModel.updateOne(
                { _id: _id},
                {$pull: {products: { productId: productId}}}
            );

            return res.status(200).send('Cart successfully updated')
        }
};

export const addItemToCart = async(req,res)=>{
        const {_id , productId} = req.body;
        const cart = await cartModel.findOne({_id: _id}) 

        if (!cart){
            return res.status(404).send('Cart not found');
        }else{
            
            await cartModel.updateOne(
                { _id: _id},
                {$push: {products: { productId: productId , quantity: 1}}}
            );

            return res.status(200).send('Cart successfully updated')
        }
};


