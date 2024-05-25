import jwt from 'jsonwebtoken'
import userModel from '../../DB/model/User.model.js'
export const roles = {
    Admin : 'admin',
    Staff : 'staff',
    GeneralUser : 'GeneralUser',
}

export const auth = (accessRole = [])=>{

    return async(req,res,next)=>{
        const {authorization} = req.headers

        if(!authorization.startsWith(process.env.BEARERKEY)){
            return res.status(400).json({message : "invalid token"})
        }

        const token = authorization.split(process.env.BEARERKEY)[1];
        const decoded = jwt.verify(token,process.env.LOGING_GIFTOPIA)


        if(!decoded){
            return res.status(400).json({message : "invalid token"});
        }


        const user = await userModel.findById(decoded.id)


        if(!user){
            return res.status(404).json({message : "user not found"})
        }

        if(!accessRole.includes(user.role)){
            return res.json({message : "not auth user"})
        }

        req.user = user;
        next();

    }
}


//القديم 
/*
import jwt from 'jsonwebtoken'
import userModel from '../../DB/model/User.model.js'
const auth = async (req,res,next)=>{

    const {authorization} = req.headers
    if(authorization.startsWith(process.env.BEARERKEY)){
        const token = authorization.split(process.env.BEARERKEY)[1];
        const decoded = jwt.verify(token,process.env.LOGING_GIFTOPIA)
        const authUser = await userModel.findById(decoded.id)
        
        req.user =  authUser;
        // next(dd(req,res));
        next()
    }
    else{
        return res.json({message : 'invalid authorization'})
    }
}
export default auth;*/