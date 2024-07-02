// services.ts
import { Product } from './product.interface';
import { productModel } from './product.model';

// 1.Create a product
const createProduct = async (product: Product) => {
    const result = await productModel.create(product);
    return result;
};

//2. Get all products
const getAllProductsFromDb = async () => {
    const result = await productModel.find();
    return result;
}

// 3.Get single product by ID
const getProductByIdFromDb = async (productId: string) => {
    const result = await productModel.findById(productId);
    return result;
}

// 4. Update Product Information

const updateProductByIdFromDb = async (productId: string, product: Partial<Product>) => {
    const result = await productModel.findByIdAndUpdate(productId, product, { new: true });
    return result;
}

// 5.Delete product by ID
const deleteProductByIdFromDb = async (productId: string) => {
    const result = await productModel.findByIdAndDelete(productId);
    return result;
}

// 6.Search products
const searchProductFromDb = async (searchTerm: string) => {
    const result = await productModel.find({
        name: { $regex: searchTerm, $options: 'i' }
    });
    return result;
}



export const ProductServices = {
    createProduct,
    getAllProductsFromDb,
    getProductByIdFromDb,
    updateProductByIdFromDb,
    deleteProductByIdFromDb,
    searchProductFromDb
};
