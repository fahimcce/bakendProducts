import { orderModel } from "./order.model";


export const createOrder = async (orderData: Partial<any>): Promise<any> => {
    try {
        const order = new orderModel(orderData);
        return await order.save();
    } catch (error) {
        throw new Error(`Error creating order: ${error}`);
    }
};

export const getAllOrders = async (): Promise<any[]> => {
    try {
        return await orderModel.find().exec();
    } catch (error) {
        throw new Error(`Error fetching orders: ${error}`);
    }
};

export const getOrdersByEmail = async (email: string): Promise<any[]> => {
    try {
        return await orderModel.find({ email }).exec();
    } catch (error) {
        throw new Error(`Error fetching orders for email ${email}: ${error}`);
    }
};
