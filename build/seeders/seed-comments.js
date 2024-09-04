"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const place = yield models_1.default.Place.findOne({
                name: 'Grace O\'Malleys'
            });
            if (place) {
                const comment = yield models_1.default.Comment.create({
                    author: 'Famished Fran',
                    content: 'Wow, simply amazing! Highly recommended!',
                    stars: 5.0,
                    rant: false
                });
                place.comments.push(comment.id); // ADD COMMENT TO PLACE COMMENTS ARRAY //
                yield place.save(); // SAVE PLACE //
            }
            else {
                console.error('Place not found');
            }
        }
        catch (err) {
            console.error('Error seeding data:', err);
        }
        finally {
            process.exit(); // EXIT PROGRAM //
        }
    });
}
seed();
