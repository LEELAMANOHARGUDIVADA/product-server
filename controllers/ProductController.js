import { pool } from "../db/connectdb.js";
import { addProductQuery, deleteProductQuery, getAllProductsQuery, getProductByIdQuery, updateProductQuery } from "../constants/queries.js"

const addProduct = async(req,res) => {
    try {
      const { name, description, price, category } = req.body;
      
      if(!name || !description || !price || !category){
        throw new Error('All fields are required');
      }

      pool.query(addProductQuery, [name, description, price, category] , function(err, results) {
        if(err) throw err;
        console.log(results)
      });
      return res.status(201).json({ success: true, message: "Product Added" });
      
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

const getAllProducts = async(req, res) => {
    try {
        pool.query(getAllProductsQuery, function(err, results) {
            if (err) throw err;
            return res.status(200).json({ success: true, message: "Products Fetched", products: results })
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const getProductById = async(req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            throw new Error('Invalid Product Id');
        }

        pool.query(getProductByIdQuery, id, function(err,results){
            if(err) throw err
            if(results.length <= 0){
                return res.status(400).json({ success: false, message: "Product Not Found" });
            }
            return res.status(200).json({ success: true, message: "Product Fetched", product: results });
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", Error: error.message });
    }
}

const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, category } = req.body;
        if(!name || !description || !price || !category){
            throw new Error('All fields are required');
        }

        pool.query(updateProductQuery, [name, description, price, category, id], function(err, results){
            if(err) throw err;
            console.log(results)
        });
        return res.status(200).json({ success: true, message: "Product Updated" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", Error: error.message });
    }
}

const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params;

        pool.query(deleteProductQuery, id, function(err, results){
            if(err) throw err;
            console.log(results)
        });
        return res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct }