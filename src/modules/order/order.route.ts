import express from "express";
import { OrderController } from "./order.controller";
const route = express.Router();

route.post("/", OrderController.createOrder);
route.get("/", OrderController.getOrder);

export const OrderRouter = route;
