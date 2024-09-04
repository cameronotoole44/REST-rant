"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("../default"));
const NewForm = ({ message }) => {
    return (react_1.default.createElement(default_1.default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "Add a New Place"),
            message && react_1.default.createElement("h4", { className: "alert-danger" }, message),
            react_1.default.createElement("form", { method: "POST", action: "/places" },
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "name" }, "Place Name"),
                    react_1.default.createElement("input", { className: "form-control", id: "name", name: "name", required: true })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "pic" }, "Place Picture"),
                    react_1.default.createElement("input", { className: "form-control", id: "pic", name: "pic" })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "city" }, "City"),
                    react_1.default.createElement("input", { className: "form-control", id: "city", name: "city" })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "country" }, "Country"),
                    react_1.default.createElement("input", { className: "form-control", id: "country", name: "country" })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "cuisines" }, "Cuisines"),
                    react_1.default.createElement("input", { className: "form-control", id: "cuisines", name: "cuisines", required: true })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "founded" }, "Founded Year"),
                    react_1.default.createElement("input", { type: "number", className: "form-control", id: "founded", name: "founded", defaultValue: new Date().getFullYear() })),
                react_1.default.createElement("input", { className: "btn btn-primary", type: "submit", value: "Add Place" })))));
};
exports.default = NewForm;
