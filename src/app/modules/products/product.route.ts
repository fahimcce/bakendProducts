
import express, { Request, Response } from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

router.get('/', async (req, res) => {
    const searchTerm = req.query.searchTerm as string;
    if (searchTerm) {
        // If searchTerm is present, handle search logic
        try {
            const result = await ProductControllers.searchProduct(req, res);
            res.json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with search',
                error: error
            });
        }
    } else {
        // If searchTerm is not present, handle retrieve all products logic
        try {
            const result = await ProductControllers.getAllProducts(req, res);
            res.json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with fetching all products',
                error: error 
            });
        }
    }
});

router.get('/:productId', ProductControllers.getSingleProduct);
router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);



export const ProductsRoute = router;
