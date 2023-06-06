"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postControllers_1 = __importDefault(require("../conrollers/postControllers"));
const postRoutes = express_1.default.Router();
//---------ADD POST---------------//
postRoutes.post('/addpost', postControllers_1.default);
exports.default = postRoutes;
