import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true }
});

const Question = mongoose.model('questions', questionSchema);

export default Question;