import { Tproduct } from "./product.interface";
import { Product } from "./product.model";

const createProductDb = async (productDb: Tproduct) => {
  const result = await Product.create(productDb);
  return result;
};
const getProductDb = async (productDb: Tproduct) => {
  const result = await Product.find(productDb);
  return result;
};
const getSingleProductDb = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

// Services For Delete a product
const deleteSingleProductDb = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
const updateSingleProductDb = async (id: string, updateProduct: any) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, updateProduct, {
    new: true,
  });
  return result;
};

export const ProductService = {
  createProductDb,
  getProductDb,
  getSingleProductDb,
  deleteSingleProductDb,
  updateSingleProductDb,
};
