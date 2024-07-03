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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.ProductControllers.createProduct);
// i build  a logic for skip path conflict
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.searchTerm;
    if (searchTerm) {
        // If searchTerm is present, handle search logic
        try {
            const result = yield product_controller_1.ProductControllers.searchProduct(req, res);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with search',
                error: error
            });
        }
    }
    else {
        // If searchTerm is not present, handle retrieve all products logic
        try {
            const result = yield product_controller_1.ProductControllers.getAllProducts(req, res);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with fetching all products',
                error: error
            });
        }
    }
}));
router.get('/:productId', product_controller_1.ProductControllers.getSingleProduct);
router.put('/:productId', product_controller_1.ProductControllers.updateProduct);
router.delete('/:productId', product_controller_1.ProductControllers.deleteProduct);
exports.ProductsRoute = router;
