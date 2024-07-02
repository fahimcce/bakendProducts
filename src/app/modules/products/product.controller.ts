// controller.ts
import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import { Product } from "./product.interface";

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

export const ProductControllers = {
    createProduct,
};
