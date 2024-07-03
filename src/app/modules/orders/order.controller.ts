import { Request, Response } from 'express';
import { orderServices } from './order.services';
import { createOrderSchema } from './order.validation';
import { ProductServices } from '../products/product.services';

// Create a new order
export const orderCreate = async (req: Request, res: Response) => {
    try {
        const { email, productId, price, quantity } = req.body;

        // Fetch product details from database
        const product = await ProductServices.getSingleProductFromDB(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        // Validate order data
        const { error } = createOrderSchema.validate({ email, productId, price, quantity });
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        // Check if sufficient quantity is available
        if (product.inventory.quantity < quantity) {
            return res.status(400).json({
                success: false,
                message: 'Insufficient stock available',
            });
        }

        // Calculate total price based on quantity (assuming price is fixed per unit)
        const totalPrice = product.price * quantity;

        // Create order
        const orderData = {
            email,
            productId,
            price,
            quantity,
            totalPrice,
            // Add more fields as needed (e.g., user information, shipping details)
        };

        const createdOrder = await orderServices.createOrderToDB(orderData);

        // Update product inventory
        await ProductServices.updateProductInventory(productId, quantity);

        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: createdOrder,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            err,
        });
    }
};

// Retrieve all orders
export const fetchAllOrders = async (_req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
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

// Retrieve orders by user email
export const fetchOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email query parameter is required',
            });
        }

        const result = await orderServices.getOrdersByEmail(email as string);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully for user email!',
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

export const orderControllers = {
    orderCreate,
    fetchAllOrders,
    fetchOrdersByEmail,
};
