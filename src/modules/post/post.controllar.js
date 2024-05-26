import postModel from "../../../DB/model/Post.model.js";

//this code written by muawiya ismail-->
export const addNewPost = async(req,res)=>{
        const {title, content, image} = req.body;
        const newPost = new postModel({userId:req.user._id, title, content, image});

        if (!newPost){
            return res.status(404).send('New post not found');
        }else{
            await newPost.save();
            return res.status(200).send('New post successfully added')
        }
};//<--

//this code written by muawiya ismail-->
export const displayAllPosts = async(req,res)=>{
        const allPosts = await postModel.find();
        
        if (!allPosts || allPosts.length === 0){
            return res.status(404).send('Posts not found');
        }else{
            return res.status(200).json(allPosts);
        }
};//<--

//this code written by muawiya ismail-->
export const displayUserAllPosts = async(req,res)=>{
    const allUserPosts = await postModel.find({userId:req.user._id});
    
    if (!allUserPosts || allUserPosts.length === 0){
        return res.status(404).send('User dose not have any Posts');
    }else{
        return res.status(200).json(allUserPosts);
    }
};//<--

//this code written by muawiya ismail-->
export const updatePost = async(req,res)=>{
        const {_id, title, content, image} = req.body;
        const postToUpdate = await postModel.findOne({_id: _id}) 

        if (!postToUpdate){
            return res.status(404).send('Post to update not found');
        }else{

            await postModel.updateOne(
                { _id: _id},
                { $set: {title: title, content: content ,image: image} }
            );
            return res.status(200).send('Post successfully updated');
        }
};//<--

//this code written by muawiya ismail-->
export const deletePost = async(req,res)=>{
        const {_id} = req.body;
        const postToDelete = await postModel.findOne({_id: _id}) 

        if (!postToDelete){
            return res.status(404).send('Post to delete not found');
        }else{

            await postModel.deleteOne({_id});
            return res.status(200).send('Post successfully deleted');
        }
};//<--