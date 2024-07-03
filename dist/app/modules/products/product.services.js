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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
// 1.Create a product
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(product);
    return result;
});
const updateProductInventory = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.productModel.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        // Update inventory quantity
        product.inventory.quantity -= quantity;
        yield product.save();
        return product;
    }
    catch (error) {
        throw new Error('Failed to update product inventory');
    }
});
//2. Get all products
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find();
    return result;
});
// 3.Get single product by ID
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findById(productId);
    return result;
});
// 4. Update Product Information
const updateProductInDB = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndUpdate(productId, product, { new: true });
    return result;
});
// 5.Delete product by ID
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndDelete(productId);
    return result;
});
// 6.Search products by name
const searchProductByName = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, 'i'); // 'i' makes it case-insensitive
    const result = yield product_model_1.productModel.find({ name: regex });
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB,
    searchProductByName,
    updateProductInventory,
};
