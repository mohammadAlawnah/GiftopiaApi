import { connectDB } from '../../DB/connection.js';
import authRouter from './auth/auth.router.js'
import userRouter from './user/user.router.js'
import cartRouter from './cart/cart.router.js'
import postRouter from './post/post.router.js'

import cors from 'cors'

export const initApp = (app,express)=>{

    
    connectDB();

    app.use(cors());

    app.use(express.json());
    

    

    app.use('/auth',authRouter)
    app.use('/user',userRouter)
    app.use('/post',postRouter)
    app.use('/cart',cartRouter)


    // app.use('/user',userRouter)
    app.use('*',(req,res)=>{
        res.json({message : "page not found"})
    })
    app.use('/',(req,res)=>{
        res.json({message : "welcome"})
    })
}