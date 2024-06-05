"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const console_1 = require("console");
const product_service_1 = require("./product.service");
// Creating a Product Controller
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield product_service_1.ProductService.createProductDb(data);
        res.status(200).json({
            success: true,
            message: "Product Create Successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Wrong Occurs When creating a New Product ",
            error: error,
        });
    }
});
/// Get a Product Controller
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.ProductService.getProductDb(searchTerm);
        if (!result) {
            throw (0, console_1.error)(" No Data Found");
        }
        else {
            res.status(200).json({
                success: true,
                message: "Desire Product Fetched Successfully",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error! when Fetching the Data",
            error: error,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.getSingleProductDb(productId);
        if (!result) {
            throw console_1.error;
        }
        else {
            res.status(200).json({
                success: true,
                message: `Id No. ${productId} Information Fetched Successfully"`,
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error! when Finding  the Data ",
            error: error,
        });
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.deleteSingleProductDb(productId);
        if (result === null) {
            throw console_1.error;
        }
        else {
            res.status(200).json({
                success: true,
                message: `Id No. ${productId} Information Deleted Successfully"`,
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error! when Finding  the Data ",
            error: error,
        });
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.updateSingleProductDb(productId, data);
        if (!result) {
            res.status(500).json({
                success: false,
                message: `Id No. ${productId} Information not Found`,
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: `Id No. ${productId} Information Updated Successfully"`,
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error! updating Data",
            error: error,
        });
    }
});
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
exports.ProductController = {
    createProduct,
    getProduct,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
};
