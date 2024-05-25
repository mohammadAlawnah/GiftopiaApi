import productModel from '../../../DB/model/AiProduct.model.js'


/*const id = req.user._id;
const aiProduct = await productModel.findOne({userId: id});*/

export const addProduct = async (req, res) => {

    const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;
    const id = req.user._id;

    const addprod = await productModel.create({ title, description, price, occasion, imageUrl, sourceUrl, userId: id })
    return res.json({ message: addprod })

}

/*if (aiProduct.role == 'admin') {
     res.json({ message: 'the user role is alridy admin' })
}*/



export const deleteProduct = async (req, res) => {

    const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;
    const id = req.user._id;
    const deleteProduct = await productModel.deleteOne({ userId: id });

    return res.json({ message: "Product deleted successfully" });

}


export const editProduct = async (req, res) => {
    const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;

    const product = await productModel.updateOne({ userId: req.user._id }, { title, description, price, occasion, imageUrl, sourceUrl })
    return res.json({ message: product });
}