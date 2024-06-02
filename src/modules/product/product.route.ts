import express from "express";
import { ProductController } from "./product.controller";

const route = express.Router();

route.post("/products", ProductController.createProduct);
route.get("/products", ProductController.getProduct);
route.get("/products/:productId", ProductController.getSingleProduct);
route.delete("/products/:productId", ProductController.deleteSingleProduct);
route.put("/products/:productId", ProductController.updateSingleProduct);

export const ProductRouter = route;
