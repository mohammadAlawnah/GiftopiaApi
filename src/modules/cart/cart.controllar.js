import cartModel from "../../../DB/model/Cart.model.js";

export const incrementItemQuantityInCart = async(req,res)=>{
    try {
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

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const decrementItemQuantityInCart = async(req,res)=>{
    try {
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

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};


export const removeItemFromCart = async(req,res)=>{
    try {
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

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const addItemToCart = async(req,res)=>{
    try {
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

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};


