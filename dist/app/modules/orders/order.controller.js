"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = exports.fetchOrdersByEmail = exports.fetchAllOrders = exports.orderCreate = void 0;
const order_services_1 = require("./order.services");
const order_validation_1 = require("./order.validation");
const product_services_1 = require("../products/product.services");
// Create a new order
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, productId, price, quantity } = req.body;
        // Fetch product details from database
        const product = yield product_services_1.ProductServices.getSingleProductFromDB(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        // Validate order data
        const { error } = order_validation_1.createOrderSchema.validate({ email, productId, price, quantity });
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
        };
        const createdOrder = yield order_services_1.orderServices.createOrderToDB(orderData);
        // Update product inventory
        yield product_services_1.ProductServices.updateProductInventory(productId, quantity);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: createdOrder,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            err,
        });
    }
});
exports.orderCreate = orderCreate;
// Retrieve all orders
const fetchAllOrders = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
exports.fetchAllOrders = fetchAllOrders;
// Retrieve orders by user email
const fetchOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email query parameter is required',
            });
        }
        const result = yield order_services_1.orderServices.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
exports.fetchOrdersByEmail = fetchOrdersByEmail;
exports.orderControllers = {
    orderCreate: exports.orderCreate,
    fetchAllOrders: exports.fetchAllOrders,
    fetchOrdersByEmail: exports.fetchOrdersByEmail,
};
