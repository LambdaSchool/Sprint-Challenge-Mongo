const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Expense = newSchema({
    _id: ObjectId('503c2b66bcf86cs793443564'),
    amount: 35,
    description: 'potatoes',
    budget: ObjectId('507f1f77bcf86cd799439011'), 
    category: ObjectId('543d2c72gsb23cd657438921') 
});

module.exports = mongoose.model('Expense', Expense);