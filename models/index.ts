import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Place  from './places';
import Comment from './comment';

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string, {

});

// Named exports
export { Place, Comment };





