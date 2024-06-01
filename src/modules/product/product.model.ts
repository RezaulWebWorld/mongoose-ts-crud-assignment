import { Schema, model } from "mongoose";
import { Tinventory, Tproduct, Tvariants } from "./product.interface";

const variantScehma = new Schema<Tvariants>({
  type: String,
  value: String,
});

const inventorySchema = new Schema<Tinventory>({
  quantity: Number,
  inStock: Boolean,
});
const productSchema = new Schema<Tproduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [variantScehma],
  inventory: inventorySchema,
});

// Declaring Model

export const Product = model<Tproduct>("Product", productSchema);
