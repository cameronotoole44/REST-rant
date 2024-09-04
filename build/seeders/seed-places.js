"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
models_1.default.Place.create([
    {
        name: 'Grace O\'Malleys',
        pic: '/images/graceOMalleys.jpg',
        city: 'Toronto',
        country: 'Canada',
        founded: 2001,
        cuisines: 'American, Irish'
    },
    {
        name: 'Coding Cat Cafe',
        pic: '/images/catCafe.jpg',
        city: 'New York',
        country: 'United States',
        founded: 2024,
        cuisines: 'Coffee, Bakery'
    }
])
    .then(() => {
    console.log('Success!');
})
    .catch((err) => {
    console.error('Failure!', err);
})
    .finally(() => {
    process.exit(); // EXIT PROGRAM //
});
