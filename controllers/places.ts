import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Place } from '../models'; 
import Comment from '../models/comment';

const router = Router();

// INTERFACES
interface PlaceDocument extends mongoose.Document {
    comments: mongoose.Schema.Types.ObjectId[];
}

interface CommentDocument extends mongoose.Document {
    author: string;
    content: string;
    stars: number;
    rant: boolean;
}

// INDEX //
router.get('/', async (req: Request, res: Response) => {
    try {
        const places = await Place.find();
        res.render('places/index', { places });
    } catch (err) {
        console.error(err);
        res.render('error404');
    }
});

// CREATE //
router.post('/', async (req: Request, res: Response) => {
    if (req.body.pic === '') { req.body.pic = undefined; }
    if (req.body.city === '') { req.body.city = undefined; }
    if (req.body.country === '') { req.body.country = undefined; }

    try {
        await Place.create(req.body);
        res.redirect('/places');
    } catch (err) {
        let message = '';
        if (err && (err as any).name === 'ValidationError') {
            const validationError = err as any;
            for (const field in validationError.errors) {
                message += `${field} was ${validationError.errors[field].value}. ${validationError.errors[field].message}\n`;
            }
            res.render('places/new', { message });
        } else {
            res.render('error404');
        }
    }
});

// NEW //
router.get('/new', (req: Request, res: Response) => {
    res.render('places/new');
});

// SHOW //
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const place = await Place.findById(req.params.id).populate('comments');
        res.render('places/show', { place });
    } catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
});

// COMMENTS //
router.get('/:id/comment', async (req: Request, res: Response) => {
    try {
        const place = await Place.findById(req.params.id);
        res.render('places/newComment', { place });
    } catch (err) {
        console.error(err);
        res.render('error404');
    }
});

router.post('/:id/comment', async (req: Request, res: Response) => {
    try {
        const place = await Place.findById(req.params.id) as PlaceDocument;

        const comment = await Comment.create({
            author: req.body.author,
            content: req.body.content,
            stars: req.body.stars,
            rant: req.body.rant === 'on'
        });

        place.comments.push(comment.id);
        await place.save();

        res.redirect(`/places/${req.params.id}`);
    } catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
});

// UPDATE //
router.put('/:id', async (req: Request, res: Response) => {
    try {
        await Place.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/places/${req.params.id}`);
    } catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
});

// DELETE //
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await Place.findByIdAndDelete(req.params.id);
        res.redirect('/places');
    } catch (err) {
        console.error('Error:', err);
        res.render('error404');
    }
});

// EDIT //
router.get('/:id/edit', async (req: Request, res: Response) => {
    try {
        const place = await Place.findById(req.params.id);
        res.render('places/edit', { place });
    } catch (err) {
        res.render('error404');
    }
});

// DELETE COMMENT //
router.delete('/:id/comment/:commentId', async (req: Request, res: Response) => {
    const placeId = req.params.id;
    const commentId = req.params.commentId;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId) as CommentDocument;

        if (!deletedComment) {
            return res.status(404).send('Comment not found');
        }

        res.redirect(`/places/${placeId}`);
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).send('Error deleting comment');
    }
});

export default router;


