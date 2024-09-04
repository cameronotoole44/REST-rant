"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    author: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
    stars: { type: Number, required: true },
    rant: { type: Boolean, default: false }
});
const Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;
