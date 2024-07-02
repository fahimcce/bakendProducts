// routes.ts
import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProduct);
router.get('/search', ProductControllers.searchProduct);
router.get('/:productId', ProductControllers.getProductById);
router.put('/:productId', ProductControllers.updateProductById);
router.delete('/:productId', ProductControllers.deleteProductById);
router.get('/', ProductControllers.getAllProducts);



export const ProductsRoute = router;
