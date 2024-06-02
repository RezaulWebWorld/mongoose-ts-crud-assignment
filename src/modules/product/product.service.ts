import { Tproduct } from "./product.interface";
import { Product } from "./product.model";

// Services form Creating a new Product
const createProductDb = async (productDb: Tproduct) => {
  const result = await Product.create(productDb);
  return result;
};

// Services form find query product or All Product
const getProductDb = async (searchTerm: string) => {
  const query = searchTerm
    ? { name: new RegExp(searchTerm as string, "i") }
    : {};
  const result = await Product.find(query);
  return result;
};

// Services for getting product by id
const getSingleProductDb = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

// Services For Delete a product
const deleteSingleProductDb = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

//Services for update a product
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
