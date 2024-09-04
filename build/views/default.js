"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Def = ({ children }) => {
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, "restRant"),
            react_1.default.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossOrigin: "anonymous" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "/style.css" })),
        react_1.default.createElement("body", null,
            react_1.default.createElement("nav", null,
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("a", { href: "/" }, "Home")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("a", { href: "/places" }, "Places")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("a", { href: "/places/new" }, "Add Place")))),
            children)));
};
exports.default = Def;
