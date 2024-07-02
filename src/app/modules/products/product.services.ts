// services.ts
import { Product } from './product.interface';
import { productModel } from './product.model';

// Create a product
const createProduct = async (product: Product) => {
    const result = await productModel.create(product);
    return result;
};

export const ProductServices = {
    createProduct,
};
