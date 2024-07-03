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
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
// i build  a logic for skip path conflict
router.post('/', order_controller_1.orderControllers.orderCreate);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    if (email) {
        try {
            const result = yield order_controller_1.orderControllers.fetchOrdersByEmail(req, res);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with fetching orders by email',
                error: error
            });
        }
    }
    else {
        try {
            const result = yield order_controller_1.orderControllers.fetchAllOrders(req, res);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with fetching all orders',
                error: error
            });
        }
    }
}));
exports.orderRoutes = router;
