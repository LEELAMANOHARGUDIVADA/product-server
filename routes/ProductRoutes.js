import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/ProductController.js";

const router = Router();

router.post('/addProduct', addProduct);
router.get('/allProducts', getAllProducts);
router.get('/:id', getProductById);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

export default router;