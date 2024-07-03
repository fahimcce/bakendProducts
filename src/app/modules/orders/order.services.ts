import { orderModel } from "./order.model";


// Create a new order in the database
const createOrderToDB = async (orderData: any) => {
    const order = new orderModel(orderData);
    return await order.save();
};

// Retrieve all orders from the database
const getAllOrdersFromDB = async () => {
    return await orderModel.find().exec();
};

// Retrieve orders by user email from the database
const getOrdersByEmail = async (email: string) => {
    return await orderModel.find({ email }).exec();
};

export const orderServices={
    createOrderToDB,
    getAllOrdersFromDB,
    getOrdersByEmail
}
