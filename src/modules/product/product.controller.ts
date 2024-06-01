import { ProductService } from "./product.service";
import { Request, Response } from "express";

// Creating a Product Controller

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await ProductService.createProductDb(data);
    res.status(200).json({
      success: true,
      message: "Product Create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product Create Successfully",
      error: error,
    });
  }
};

/// Get a Product Controller

export const ProductController = {
  createProduct,
};
