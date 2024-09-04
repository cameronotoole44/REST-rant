import mongoose, { Document, Schema, Model, model } from 'mongoose';

interface CommentDocument extends Document {
    author: string;
    content: string;
    stars: number;
    rant: boolean;
}

const commentSchema = new Schema<CommentDocument>({
    author: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
    stars: { type: Number, required: true },
    rant: { type: Boolean, default: false }
});

const Comment: Model<CommentDocument> = model<CommentDocument>('Comment', commentSchema);

export default Comment;
