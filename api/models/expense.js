const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema ({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Schema.Types.ObjectId,
    ref: 'Budget',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);