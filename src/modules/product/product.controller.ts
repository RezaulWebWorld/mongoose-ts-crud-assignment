import { error } from "console";
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
      message:
        "Something Wrong Occurs When creating a New Product Successfully",
      error: error,
    });
  }
};

/// Get a Product Controller
const getProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm: string = req.query.searchTerm as string;

    const result = await ProductService.getProductDb(searchTerm);

    res.status(200).json({
      success: true,
      message: "Desire Product Fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error! when Fetching the Data",
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductDb(productId);
    if (result === null) {
      throw error;
    } else {
      res.status(200).json({
        success: true,
        message: `Id No. ${productId} Information Fetched Successfully"`,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error! when Finding  the Data ",
      error: error,
    });
  }
};
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteSingleProductDb(productId);
    if (result === null) {
      throw error;
    } else {
      res.status(200).json({
        success: true,
        message: `Id No. ${productId} Information Deleted Successfully"`,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error! when Finding  the Data ",
      error: error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { productId } = req.params;
    const result = await ProductService.updateSingleProductDb(productId, data);

    if (!result) {
      res.status(500).json({
        success: false,
        message: `Id No. ${productId} Information not Found`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Id No. ${productId} Information Updated Successfully"`,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error! updating Data",
      error: error,
    });
  }
};

//   try {
//     const searchTerm: string = req.query.searchTerm as string;

//     const result = await ProductService.getProductByQueryDb(searchTerm);
//     // const result = console.log(searchTerm);

//     if (!result) {
//       throw error;
//     } else {
//       res.status(200).json({
//         success: true,
//         message: `${searchTerm} Information Fetch Successfully"`,
//         data: result,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error! fetching Data",
//       error: error,
//     });
//   }
// };
export const ProductController = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
