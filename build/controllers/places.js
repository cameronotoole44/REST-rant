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
const express_1 = require("express");
const models_1 = require("../models");
const comment_1 = __importDefault(require("../models/comment"));
const router = (0, express_1.Router)();
// INDEX //
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const places = yield models_1.Place.find();
        res.render('places/index', { places });
    }
    catch (err) {
        console.error(err);
        res.render('error404');
    }
}));
// CREATE //
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.pic === '') {
        req.body.pic = undefined;
    }
    if (req.body.city === '') {
        req.body.city = undefined;
    }
    if (req.body.country === '') {
        req.body.country = undefined;
    }
    try {
        yield models_1.Place.create(req.body);
        res.redirect('/places');
    }
    catch (err) {
        let message = '';
        if (err && err.name === 'ValidationError') {
            const validationError = err;
            for (const field in validationError.errors) {
                message += `${field} was ${validationError.errors[field].value}. ${validationError.errors[field].message}\n`;
            }
            res.render('places/new', { message });
        }
        else {
            res.render('error404');
        }
    }
}));
// NEW //
router.get('/new', (req, res) => {
    res.render('places/new');
});
// SHOW //
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const place = yield models_1.Place.findById(req.params.id).populate('comments');
        res.render('places/show', { place });
    }
    catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
}));
// COMMENTS //
router.get('/:id/comment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const place = yield models_1.Place.findById(req.params.id);
        res.render('places/newComment', { place });
    }
    catch (err) {
        console.error(err);
        res.render('error404');
    }
}));
router.post('/:id/comment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const place = yield models_1.Place.findById(req.params.id);
        const comment = yield comment_1.default.create({
            author: req.body.author,
            content: req.body.content,
            stars: req.body.stars,
            rant: req.body.rant === 'on'
        });
        place.comments.push(comment.id);
        yield place.save();
        res.redirect(`/places/${req.params.id}`);
    }
    catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
}));
// UPDATE //
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Place.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/places/${req.params.id}`);
    }
    catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
}));
// DELETE //
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Place.findByIdAndDelete(req.params.id);
        res.redirect('/places');
    }
    catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
}));
// EDIT //
router.get('/:id/edit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const place = yield models_1.Place.findById(req.params.id);
        res.render('places/edit', { place });
    }
    catch (err) {
        res.render('error404');
    }
}));
// DELETE COMMENT //
router.delete('/:id/comment/:commentId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const placeId = req.params.id;
    const commentId = req.params.commentId;
    try {
        const deletedComment = yield comment_1.default.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).send('Comment not found');
        }
        res.redirect(`/places/${placeId}`);
    }
    catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).send('Error deleting comment');
    }
}));
exports.default = router;
