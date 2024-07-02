// app.ts
import express, { Application } from 'express';
import cors from 'cors';
import { ProductsRoute } from './app/modules/products/product.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Register routes
app.use('/api/products', ProductsRoute);

export default app;
