import express from 'express';
import { orderControllers } from './order.controller';
// import { StudentControllers } from './student.controller';

// const router = express.Router();
const router = express.Router();

router.post('/',orderControllers.orderCreate );
router.get('/', async (req, res) => {
    const { email } = req.query;
    if (email) {
        try {
            const result = await orderControllers.fetchOrdersByEmail(req, res);
            res.json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with fetching orders by email',
                error: error
            });
        }
    } else {
        try {
            const result = await orderControllers.fetchAllOrders(req, res);
            res.json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong with fetching all orders',
                error: error 
            });
        }
    }
});




export const orderRoutes = router;
