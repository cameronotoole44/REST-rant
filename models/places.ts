import mongoose, { Schema, Document } from 'mongoose';

interface IPlace extends Document {
    name: string;
    pic?: string;
    cuisines: string;
    city?: string;
    country?: string;
    founded?: number;
    comments: mongoose.Schema.Types.ObjectId[];
    showEstablished: () => string;
}

const placeSchema: Schema<IPlace> = new Schema({
    name: { type: String, required: true },
    pic: { type: String, default: '/images/default.jpg' },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Somewhere' },
    country: { type: String, default: 'Someplace' },
    founded: {
        type: Number,
        min: [600, 'THAT OLD HUH?!'],
        max: [new Date().getFullYear(), 'SO YOU\'RE FROM THE FUTURE HUH?']
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

placeSchema.methods.showEstablished = function (): string {
    return `${this.name} has been serving ${this.city}, ${this.country} since ${this.founded}.`;
};

const Place = mongoose.model<IPlace>('Place', placeSchema);

export default Place;



