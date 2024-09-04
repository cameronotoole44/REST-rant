"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("./default"));
const Home = () => {
    return (react_1.default.createElement(default_1.default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "RESTRANT"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", { src: "/images/breakfast.jpg", height: "600px", alt: "french toast breakfast" })),
            react_1.default.createElement("div", null,
                "Photo by ",
                react_1.default.createElement("a", { href: "https://unsplash.com/@randyfath?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" }, "Randy Fath"),
                " on ",
                react_1.default.createElement("a", { href: "https://unsplash.com/photos/food-photography-of-strawberries-oranges-and-pancakes-on-plates-SQ20tWzxXO0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" }, "Unsplash")),
            react_1.default.createElement("a", { href: "/places" },
                react_1.default.createElement("button", { className: "btn btn-secondary" }, "Places Page")))));
};
exports.default = Home;
