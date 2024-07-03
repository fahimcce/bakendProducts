// app.ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductsRoute } from './app/modules/products/product.route';
import { orderRoutes } from './app/modules/orders/order.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Register routes
app.use('/api/products', ProductsRoute);
app.use('/api/orders',orderRoutes)


app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Welcome to ECommerze backend API"
    })
})
export default app;
