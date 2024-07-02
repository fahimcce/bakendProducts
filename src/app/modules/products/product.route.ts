import express from 'express';
import { productControllers } from './product.controller'; // Assuming productControllers is exported correctly

const router = express.Router();

router.post('/create-product', productControllers.createProduct);

export const productsRoute = router;
