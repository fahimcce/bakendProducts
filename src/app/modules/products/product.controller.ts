import { Request, Response } from "express";
import { ProductServices } from "./product.services";


export const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const result = await ProductServices.createProduct(productData);
        res.status(200).json({
                success: true,
                message: 'Product created successfully',
                data: result,
        });
      
    } catch (error) {
        console.log(error);
    }
};


export const productControllers ={
    createProduct,
}