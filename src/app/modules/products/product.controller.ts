
import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import { Product } from "./product.interface";


//1. insert a data
export const createProduct = async (req: Request, res: Response) => {
    try {
        const productData: Product = req.body.product;
        const result = await ProductServices.createProduct(productData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

//2. Retreive all data
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductsFromDb();
        res.status(200).json({
            success: true,
            message: 'all Data Retreive successFully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

//3. retrieve single data
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getProductByIdFromDb(productId);
        res.status(200).json({
            success: true,
            message:"Retrive data successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

// 4.Update product
export const updateProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = await ProductServices.updateProductByIdFromDb(productId, productData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};


// 5.Delete product
export const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteProductByIdFromDb(productId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};


//6.search product by searchTerm
export const searchProduct = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await ProductServices.searchProductFromDb(searchTerm as string);
        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    searchProduct
};
