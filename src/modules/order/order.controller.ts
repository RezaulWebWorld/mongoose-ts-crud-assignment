import { Torders } from "./order.interface";
import { Request, Response } from "express";
import { Orderservice } from "./order.service";
import { error } from "console";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await Orderservice.createOrderDb(data);
    res.status(200).json({
      success: true,
      message: "Order Create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something Wrong Occurs When creating a New Order",
      error: error,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    const result = await Orderservice.getOrderDb(email);

    res.status(200).json({
      success: true,
      message: "Desired {VALUE} Retrive Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error! when Fetching the Order",
      error: error,
    });
  }
};
export const OrderController = {
  createOrder,
  getOrder,
};
