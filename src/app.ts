import express from "express";
import cors from "cors";
import { ProductRouter } from "./modules/product/product.route";
const app = express();

// Parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRouter);
export default app;
