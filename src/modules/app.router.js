import { connectDB } from '../../DB/connection.js';
import authRouter from './auth/auth.router.js'
import userRouter from './user/user.router.js'
import locationRouter from './location/location.router.js'
import brandRouter from './brand/brand.router.js';
import cors from 'cors'
import coponRouter from'./copon/copon.router.js'

export const initApp = (app,express)=>{

    
    connectDB();

    app.use(cors());

    app.use(express.json());
    

    app.use('/auth',authRouter)
    app.use('/user',userRouter)
    app.use('/location',locationRouter)
    app.use('/brand',brandRouter)
app.use('/copon',coponRouter)


    // app.use('/user',userRouter)
    app.use('*',(req,res)=>{
        res.json({message : "page not found"})
    })
    app.use('/',(req,res)=>{
        res.json({message : "welcome"})
    })
}