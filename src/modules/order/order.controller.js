import orderModel from "../../../DB/model/Order.model.js";

    export const DisplayTraking =async(req,res)=>{
    try{const orders=await orderModel.findOne();
    
    return res.json({message:'succes',orders})
    
    }catch(error){
        return res.json({message:'error',error:error.stack})
    }
    }

    export const addTraking=async(req,res)=>{
        try{
            const {product} =req.params;
            const {status,timeRemaining,totalPrice}=req.body;
            const order=await orderModel.create({_product:product},{status,timeRemaining,totalPrice})
            return res.json({message:'succes',order})
    }catch(error){
        return res.json({message:'error',error:error.stack})
    }
    }

    export const editStatus=async(req,res)=>{
       try{ const {product}=req.params;
        const{status,timeRemaining}=req.body;
        const order= await orderModel.updateOne({_product:product},{status,timeRemaining});
        return res.json({message:'succes',order})
    }catch(error){
        return res.json({message:'error',error:error.stack})
    }
    }

    export const deleteTraking =async(req,res)=>{
        try{const {product}=req.params;
        const traking = await orderModel.deleteOne({_product:product})
        return res.json({message:'succes',traking})
    }catch(error){
        return res.json({message:"error",error:error.stack})
    }
    }