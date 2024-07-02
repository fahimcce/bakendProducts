import { Schema, model } from 'mongoose';
import { Product, ProductInventory, ProductVariant } from './product.interface';

// Variant schema
const variantSchema = new Schema<ProductVariant>({
    type: { type: String, required: true },
    value: { type: String, required: true },
});

// Inventory schema
const inventorySchema = new Schema<ProductInventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

// Product schema
const productSchema = new Schema<Product>({
    name: { type: String, required: [true, 'Product name is required'] },
    description: { type: String, required: [true, 'Product description is required'] },
    price: { type: Number, required: [true, 'Product price is required'] },
    category: { type: String, required: [true, 'Product category is required'] },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true },
});

// Model for Product
export const productModel = model<Product>('Product', productSchema);
