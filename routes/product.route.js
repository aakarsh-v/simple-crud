import express from 'express';
import Product from '../models/product.model.js';
import {getProducts, getProductsById, createProduct, updateProduct, deleteProduct} from '../controller/product.controller.js';
const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProductsById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;