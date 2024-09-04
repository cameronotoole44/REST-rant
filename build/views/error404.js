"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("./default"));
const Error404 = () => {
    return (react_1.default.createElement(default_1.default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "404: PAGE NOT FOUND"),
            react_1.default.createElement("p", null, "This page is currently getting worked on"),
            react_1.default.createElement("img", { src: "/images/jsxLolz.jpg", alt: "jsx panic" }))));
};
exports.default = Error404;
