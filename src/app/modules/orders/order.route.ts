import express from 'express';
import { createOrderController, getAllOrdersController, getOrdersByEmailController } from './order.controller';


const router = express.Router();

router.post('/', createOrderController);
router.get('/', getAllOrdersController);
router.get('/', getOrdersByEmailController);

export const orderRoutes= router;
