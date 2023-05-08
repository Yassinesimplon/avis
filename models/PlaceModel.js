import mongoose from 'mongoose';

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
