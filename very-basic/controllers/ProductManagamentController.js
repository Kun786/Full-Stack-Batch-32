const ProductModel = require('../models/ProductModel');

let AddProduct = async(req, res) => {
    try {
        const { ProductName, ProductAge, ProductCompany } = req.body;
        const CreateProductObject = new ProductModel({
            ProductName,
            ProductAge,
           ProductCompany
        })
        const DocToSave  = await CreateProductObject.save();
        res.json({
            Message:'Product Saved Successfuly',
            Result:true,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Result:false,
            Data:false
        })
    }
}

module.exports = {
    AddProduct
}