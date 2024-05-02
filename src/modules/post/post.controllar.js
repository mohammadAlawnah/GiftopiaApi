import postModel from "../../../DB/model/Post.model.js";

export const addNewPost = async(req,res)=>{
    try {
        const {userId, title, content, image} = req.body;
        const newPost = new postModel({userId, title, content, image});

        if (!newPost){
            return res.status(404).send('New post not found');
        }else{
            await newPost.save();
            return res.status(200).send('New post successfully added')
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const displayAllPosts = async(req,res)=>{
    try {
        const allPosts = await postModel.find();
        
        if (!allPosts || allPosts.length === 0){
            return res.status(404).send('Posts not found');
        }else{
            return res.status(200).json(allPosts);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const updatePost = async(req,res)=>{
    try {
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

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const deletePost = async(req,res)=>{
    try {
        const {_id} = req.body;
        const postToDelete = await postModel.findOne({_id: _id}) 

        if (!postToDelete){
            return res.status(404).send('Post to delete not found');
        }else{

            await postModel.deleteOne({_id});
            return res.status(200).send('Post successfully deleted');
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};