import { Request, Response } from 'express';
import { createOrderSchema } from './order.validation';
import { createOrder, getAllOrders, getOrdersByEmail } from './order.services';

export const createOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { error } = createOrderSchema.validate(req.body);
        if (error) {
            res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
            return;
        }

        const orderData = req.body;
        const result = await createOrder(orderData);
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            
        });
    }
};

export const getAllOrdersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await getAllOrders();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

export const getOrdersByEmailController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.query;
        if (!email) {
            res.status(400).json({
                success: false,
                message: 'Email query parameter is required',
            });
            return;
        }

        const result = await getOrdersByEmail(email as string);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
