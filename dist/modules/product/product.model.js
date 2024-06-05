"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantScehma = new mongoose_1.Schema({
    type: String,
    value: String,
});
const inventorySchema = new mongoose_1.Schema({
    quantity: Number,
    inStock: Boolean,
});
const productSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants: [variantScehma],
    inventory: inventorySchema,
});
// Declaring Model
exports.Product = (0, mongoose_1.model)("Product", productSchema);
