import { Request, Response } from 'express';
import { ProductServices } from './product.services';
import { createProductSchema, updateProductSchema } from './product.validation';

// Create a product
const createProduct = async (req: Request, res: Response) => {
    try {
        const { error } = createProductSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        const productData = req.body.product;
        const result = await ProductServices.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: 'Product is created successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

// Get single product
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'One product retrieved successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

// Update product
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { error } = updateProductSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        const productData = req.body.product;
        const result = await ProductServices.updateProductInDB(productId, productData);
        res.status(200).json({
            success: true,
            message: 'Product information updated successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

// Delete product
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteProductFromDB(productId);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

// Search product by name
const searchProduct = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        if (!searchTerm) {
            return res.status(400).json({
                success: false,
                message: 'Search term query parameter is required',
            });
        }
        const result = await ProductServices.searchProductByName(searchTerm as string);
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
};
