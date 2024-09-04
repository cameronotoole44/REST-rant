"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("../default"));
const EditForm = ({ place }) => {
    return (react_1.default.createElement(default_1.default, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null,
                "EDIT PLACE: ",
                place.name),
            react_1.default.createElement("form", { method: "POST", action: `/places/${place.id}?_method=PUT` },
                react_1.default.createElement("div", { className: "form-group col-sm-6" },
                    react_1.default.createElement("label", { htmlFor: "name" }, "Place Name"),
                    react_1.default.createElement("input", { className: "form-control", name: "name", id: "name", defaultValue: place.name, required: true })),
                react_1.default.createElement("div", { className: "form-group col-sm-6" },
                    react_1.default.createElement("label", { htmlFor: "pic" }, "Place Picture"),
                    react_1.default.createElement("input", { className: "form-control", name: "pic", id: "pic", defaultValue: place.pic })),
                react_1.default.createElement("div", { className: "form-group col-sm-6" },
                    react_1.default.createElement("label", { htmlFor: "city" }, "City"),
                    react_1.default.createElement("input", { className: "form-control", name: "city", id: "city", defaultValue: place.city })),
                react_1.default.createElement("div", { className: "form-group col-sm-6" },
                    react_1.default.createElement("label", { htmlFor: "country" }, "Country"),
                    react_1.default.createElement("input", { className: "form-control", name: "country", id: "country", defaultValue: place.country })),
                react_1.default.createElement("div", { className: "form-group col-sm-6" },
                    react_1.default.createElement("label", { htmlFor: "founded" }, "Founded"),
                    react_1.default.createElement("input", { className: "form-control", name: "founded", id: "founded", defaultValue: place.founded })),
                react_1.default.createElement("div", { className: "form-group col-sm-6" },
                    react_1.default.createElement("label", { htmlFor: "cuisines" }, "Cuisines"),
                    react_1.default.createElement("input", { className: "form-control", name: "cuisines", id: "cuisines", defaultValue: place.cuisines, required: true })),
                react_1.default.createElement("input", { className: "btn btn-primary", type: "submit", defaultValue: "Update" })))));
};
exports.default = EditForm;
