
import { Product } from './product.interface';
import { productModel } from './product.model';

// 1.Create a product
const createProductIntoDB = async (product: Product) => {
    const result = await productModel.create(product);
    return result;
};

//2. Get all products
const getAllProductsFromDB = async () => {
    const result = await productModel.find();
    return result;
}

// 3.Get single product by ID
const getSingleProductFromDB = async (productId: string) => {
    const result = await productModel.findById(productId);
    return result;
}

// 4. Update Product Information

const updateProductInDB = async (productId: string, product: Partial<Product>) => {
    const result = await productModel.findByIdAndUpdate(productId, product, { new: true });
    return result;
}

// 5.Delete product by ID
const deleteProductFromDB = async (productId: string) => {
    const result = await productModel.findByIdAndDelete(productId);
    return result;
}

// 6.Search products
// Search products by name
const searchProductByName = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i');  // 'i' makes it case-insensitive
    const result = await productModel.find({ name: regex });
    return result;
};


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB,
    searchProductByName
};
