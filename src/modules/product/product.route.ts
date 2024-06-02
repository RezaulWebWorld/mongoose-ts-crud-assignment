import express from "express";
import { ProductController } from "./product.controller";

const route = express.Router();

route.post("/", ProductController.createProduct);
route.get("/", ProductController.getProduct);
route.get("/:productId", ProductController.getSingleProduct);
route.delete("/:productId", ProductController.deleteSingleProduct);
route.put("/:productId", ProductController.updateSingleProduct);

export const ProductRouter = route;
