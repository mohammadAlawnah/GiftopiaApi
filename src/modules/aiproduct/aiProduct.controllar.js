import productModel from '../../../DB/model/AiProduct.model.js';

// Function to add a new product (ReemaKusa)
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

// Function to delete product (ReemaKusa)
export const deleteProduct = async (req, res) => {

    try {

        const id = req.user._id;
        const productId = req.params.productId;
        const deleteProduct = await productModel.deleteOne({ userId: id , _id: productId });

        if (deleteProduct.deletedCount > 0) {
            return res.json({ message: "Product deleted successfully" });
        } else {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

// Function to edit the product info (ReemaKusa)
export const editProduct = async (req, res) => {
    
    try {
        const { title, description, price, occasion, imageUrl, sourceUrl } = req.body;
        const productId = req.params.productId;
        const updateproduct = await productModel.updateOne({ userId: req.user._id , _id: productId }, { title, description, price, occasion, imageUrl, sourceUrl })

        if (updateproduct) {
            return res.json({ message: "Product updated successfully", product: updateproduct });
        } else {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}