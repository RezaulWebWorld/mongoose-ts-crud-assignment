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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
// Services form Creating a new Product
const createProductDb = (productDb) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(productDb);
    return result;
});
// Services form find query product or All Product
const getProductDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchTerm
        ? { name: new RegExp(searchTerm, "i") }
        : {};
    const result = yield product_model_1.Product.find(query);
    return result;
});
// Services for getting product by id
const getSingleProductDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id: id });
    return result;
});
// Services For Delete a product
const deleteSingleProductDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.deleteOne({ _id: id });
    return result;
});
//Services for update a product
const updateSingleProductDb = (id, updateProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate({ _id: id }, updateProduct, {
        new: true,
    });
    return result;
});
exports.ProductService = {
    createProductDb,
    getProductDb,
    getSingleProductDb,
    deleteSingleProductDb,
    updateSingleProductDb,
};
