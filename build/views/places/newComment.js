"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("../default"));
const CommentForm = ({ place }) => {
    return (react_1.default.createElement(default_1.default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "Add a New Comment"),
            react_1.default.createElement("form", { method: "POST", action: `/places/${place.id}/comment` },
                react_1.default.createElement("div", { className: "form-group mx-auto col-sm-6 col-md-4 col-lg-3" },
                    react_1.default.createElement("label", { htmlFor: "author" }, "Author"),
                    react_1.default.createElement("input", { className: "form-control", id: "author", name: "author", required: true })),
                react_1.default.createElement("div", { className: "form-group mx-auto col-sm-6 col-md-4 col-lg-3" },
                    react_1.default.createElement("label", { htmlFor: "content" }, "Content"),
                    react_1.default.createElement("textarea", { className: "form-control", id: "content", name: "content", rows: 3 })),
                react_1.default.createElement("div", { className: "form-group mx-auto col-sm-6 col-md-4 col-lg-3" },
                    react_1.default.createElement("label", { htmlFor: "stars" }, "Stars"),
                    react_1.default.createElement("input", { className: "form-control", type: "number", id: "stars", name: "stars", defaultValue: 5, max: "5", min: "0", required: true })),
                react_1.default.createElement("div", { className: "form-group mx-auto col-sm-6 col-md-4 col-lg-3" },
                    react_1.default.createElement("label", { htmlFor: "rant" }, "Rant"),
                    react_1.default.createElement("input", { type: "checkbox", name: "rant", id: "rant", defaultChecked: true })),
                react_1.default.createElement("input", { className: "btn btn-primary", type: "submit", value: "Add Comment" })))));
};
exports.default = CommentForm;
