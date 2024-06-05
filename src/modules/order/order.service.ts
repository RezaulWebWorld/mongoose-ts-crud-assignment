import { Torders } from "./order.interface";
import { Order } from "./order.model";

const createOrderDb = async (orderDb: Torders) => {
  const result = await Order.create(orderDb);
  return result;
};
const getOrderDb = async (email: string) => {
  const query = email ? { email: email } : {};
  const result = await Order.find(query);
  return result;
};

export const Orderservice = { createOrderDb, getOrderDb };
