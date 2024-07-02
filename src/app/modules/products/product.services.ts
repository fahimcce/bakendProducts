
import { Product } from './product.interface';
import { productModel } from './product.model';


// Create a product
const createProduct = async (product: Product) => {
    const result = await productModel.create(product);
    return result;
}

// // Get all products
// const getAllProducts = async () => {
//     const result = await productModel.find();
//     return result;
// }

// // Get single product by ID
// const getProductById = async (_id: string) => {
//     const result = await productModel.findById(_id);
//     return result;
// }

// // Update product by ID
// const updateProductById = async (_id: string, product: Partial<Product>) => {
//     const result = await productModel.findByIdAndUpdate(_id, product, { new: true });
//     return result;
// }

// // Delete product by ID
// const deleteProductById = async (_id: string) => {
//     const result = await productModel.findByIdAndDelete(_id);
//     return result;
// }

export const ProductServices = {
    createProduct,
    // getAllProducts,
    // getProductById,
    // updateProductById,
    // deleteProductById,
}
