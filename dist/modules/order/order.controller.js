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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield order_service_1.Orderservice.createOrderDb(data);
        res.status(200).json({
            success: true,
            message: "Order Create Successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Wrong Occurs When creating a New Order",
            error: error,
        });
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.Orderservice.getOrderDb(email);
        res.status(200).json({
            success: true,
            message: `Desired email: ${email} Retrive Successfully`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error! when Fetching the Order",
            error: error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getOrder,
};
