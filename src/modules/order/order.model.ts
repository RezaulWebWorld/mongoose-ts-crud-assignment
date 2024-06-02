import { Schema, model } from "mongoose";
import { Torders } from "./order.interface";

const orderSchema = new Schema<Torders>({
  email: String,
  productId: String,
  price: Number,
  quantity: Number,
});

export const Order = model<Torders>("Order", orderSchema);
