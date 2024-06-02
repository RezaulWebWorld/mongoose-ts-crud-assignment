import express from "express";
import cors from "cors";
import { ProductRouter } from "./modules/product/product.route";
import { OrderRouter } from "./modules/order/order.route";
const app = express();

// Parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);
export default app;
