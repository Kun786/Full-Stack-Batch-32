const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    ExamPlan: { type: String, required: true, unique:true },
    Price: { type: Number, required: true },
    Questions: {
        type: [
            {
                QuestionId: { type: mongoose.Schema.ObjectId },
                QuestionNo: { type: Number },
                Question: { type: String },
                Key1: { type: String },
                Key2: { type: String },
                Key3: { type: String },
                Key4: { type: String },
                AnswerKey: { type: String },
            }
        ],required:true},
}) 

module.exports = mongoose.model('QuestionsCollection',QuestionSchema);