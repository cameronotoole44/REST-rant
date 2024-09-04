"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.Place = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const places_1 = __importDefault(require("./places"));
exports.Place = places_1.default;
const comment_1 = __importDefault(require("./comment"));
exports.Comment = comment_1.default;
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGO_URI, {});
