const express = require('express');
const mongoose = require('mongoose');

const Expense = require('../models/expense');
const Budget = require('../models/budget');
const Category = require('../models/category');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  const id = info.budget;

  if (info) {
    expense = new Expense(info);
    expense
      .save()
      .then(newExpense => {
        Expense.find()
          .select('-_id -__v')
          .populate('budget', '-_id -__v')
          .populate('category', '-_id -__v')
          .then(expenses => {
            res.status(201).send({ newExpense, allExpenses: expenses });
          });
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

router.get('/', (req, res) => {
  const { aggregatedBy } = req.query;
  if (!aggregatedBy) {
    Expense.find()
      .select('-_id -__v')
      .populate('budget', '-_id -__v')
      .populate('category', '-_id -__v')
      .then(expenses => {
        res.send(expenses);
      })
      .catch(err => {
        res.send({ error: err });
      });
  } else if (aggregatedBy === 'category') {
    Expense.aggregate([
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
      { $project: { category: '$_id', _id: false, total: true } },
      { $sort: { total: -1 } },
    ]).then(response => {
      Category.populate(response, {
        path: 'category',
        select: '-_id -__v',
      }).then(categoryTotals => {
        Expense.find()
          .select('-_id -__v -budget')
          .populate('category', '-_id -__v')
          .then(expenses => {
            const array = [];
            for (let i = 0; i < categoryTotals.length; i++) {
              array.push(categoryTotals[i]);
              array[i].expenses = [];
              for (let j = 0; j < expenses.length; j++) {
                if (
                  categoryTotals[i].category.title == expenses[j].category.title
                )
                  array[i].expenses.push(expenses[j]);
              }
            }
            res.send(array);
          })
          .catch(err => {
            res.send({ error: err });
          });
      });
    });
  } else res.send('Try: "localhost:5000/expense?aggregatedBy=category"');
});

module.exports = router;
