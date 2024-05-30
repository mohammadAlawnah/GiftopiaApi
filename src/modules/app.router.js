import { connectDB } from '../../DB/connection.js';
import authRouter from './auth/auth.router.js'
import userRouter from './user/user.router.js'
import locationRouter from './location/location.router.js'
import categoryRouter from './category/category.router.js'
import subcategorie from './subcategory/subcategory.router.js'
import productRouter from './product/product.router.js'
import aiProductRouter from './aiProduct/AiProduct.router.js'
import cors from 'cors'
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import AiProductModel from '../../DB/model/Aiproduct.js';
import searshGiftRouter from './searchGift/SearshGift.router.js'

// تحويل import.meta.url إلى مسار الملف الحالي
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const initApp = (app,express)=>{

    
    connectDB();

    app.use(cors());

    app.use(express.json());
    
    

    app.use('/auth',authRouter)
    app.use('/user',userRouter)
    app.use('/location',locationRouter)
    app.use('/category',categoryRouter)
    app.use('/subcategorie',subcategorie)
    app.use('/product',productRouter)
    app.use('/webProduct',aiProductRouter)
    app.use('/searchGift',searshGiftRouter)
    















    app.post('/AddData',(req,res)=>{


        let urlGift ; 
        const {ocr} = req.body;

        if(ocr == 'valentine') {
            urlGift = `https://www.amazon.com/s?k=red+dress`;
        }
        if(ocr == 'birthday'){
            urlGift = `https://www.amazon.com/s?k=birthday`;
        }


        const scriptPath = path.join(__dirname, 'scrept2.py');
        console.log(`Running script: ${scriptPath}`);

        const pythonProcess = spawn('python', [scriptPath, urlGift,ocr]);

        pythonProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            res.json("done");
        });

        pythonProcess.on('error', (err) => {
            console.error(`Failed to start process: ${err}`);
            res.status(500).json({ error: 'Failed to start process' });
        });
    })

    app.post('/AiRe',async(req,res)=>{

        const{data} = req.body;
        const{ocr} = req.body;


        for(let i =0 ;i<data.length;i++){
           let product = await AiProductModel.create({URL : data[i]['URL'], Title:data[i]['Title'],ImageURL : data[i]['Image URL'],Rating:data[i]['Rating'],Price:data[i]['Price']+10,ReviewCount : data[i]['Review Count'],PriceCategory:data[i]['Price Category'],ocr})
        }



        res.json('done')
       

    })




    // app.use('/user',userRouter)
    app.use('*',(req,res)=>{
        res.json({message : "page not found"})
    })
    app.use('/',(req,res)=>{
        res.json({message : "welcome"})
    })
}
