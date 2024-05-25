import productModel from '../../../DB/model/AiProduct.model.js';

export const addProduct = async (req, res) => {

    try {
        const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;
        const id = req.user._id;
        
        const addprod = await productModel.create({ title, description, price, occasion, imageUrl, sourceUrl, userId: id });

        if (addprod) {
            return res.json({ message: "Product added successfully", product: addprod });
        } else {
            return res.status(400).json({ error: "Failed to add the product" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }

}


export const deleteProduct = async (req, res) => {

    try {
        //const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;
        const id = req.user._id;
        const deleteProduct = await productModel.deleteOne({ userId: id });

        if (deleteProduct.deletedCount > 0) {
            return res.json({ message: "Product deleted successfully" });
        } else {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}


export const editProduct = async (req, res) => {
    
    try {
        const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;

        const updateproduct = await productModel.updateOne({ userId: req.user._id }, { title, description, price, occasion, imageUrl, sourceUrl })

        if (updateproduct) {
            return res.json({ message: "Product updated successfully", product: updateproduct });
        } else {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}