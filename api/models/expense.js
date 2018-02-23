const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types;

require ('./budget');
require ('./category');

const ExpenseSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    budget: { type: ObjectId, ref: 'Budget' },
    category: { type: ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
