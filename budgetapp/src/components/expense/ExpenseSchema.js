const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: Number,
    description: { type: String, required: true },
    budget: [{
        type: ObjectId,
        ref: 'Budget'
    }],
    category: [{
        type: ObjectId,
        ref: 'Category'
    }],
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Expense', Expense);
