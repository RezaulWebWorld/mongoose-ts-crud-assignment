"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: String,
    productId: String,
    price: Number,
    quantity: Number,
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
