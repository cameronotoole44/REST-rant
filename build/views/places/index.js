"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("../default"));
const Index = ({ places }) => {
    const placesFormatted = places.map((place, index) => {
        return (react_1.default.createElement("div", { key: index, className: "col-sm-6" },
            react_1.default.createElement("h2", null,
                react_1.default.createElement("a", { href: `/places/${place.id}` }, place.name)),
            react_1.default.createElement("p", { className: "text-center" }, place.cuisines),
            react_1.default.createElement("img", { src: place.pic, alt: place.name }),
            react_1.default.createElement("p", { className: "text-center" },
                "Located in ",
                place.city,
                ", ",
                place.country)));
    });
    return (react_1.default.createElement(default_1.default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "Rant or Rave"),
            react_1.default.createElement("div", { className: "row" }, placesFormatted))));
};
exports.default = Index;
