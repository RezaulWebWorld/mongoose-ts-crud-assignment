import { Tproduct } from "./product.interface";
import { Product } from "./product.model";

const createProductDb = async (productDb: Tproduct) => {
  const result = await Product.create(productDb);
  return result;
};

export const ProductService = {
  createProductDb,
};
