"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const route = express_1.default.Router();
route.post("/", product_controller_1.ProductController.createProduct);
route.get("/", product_controller_1.ProductController.getProduct);
route.get("/:productId", product_controller_1.ProductController.getSingleProduct);
route.delete("/:productId", product_controller_1.ProductController.deleteSingleProduct);
route.put("/:productId", product_controller_1.ProductController.updateSingleProduct);
exports.ProductRouter = route;
