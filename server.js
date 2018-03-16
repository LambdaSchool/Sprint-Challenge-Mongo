const express = require('express'); 
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
server.use(bodyParser.json());

//==============================
//         MODEL IMPORTS
//==============================

const Budget = require('./models/BudgetModel.js');
const Expense = require('./models/ExpenseModel.js');
const Category = require('./models/CategoryModel.js');

//==============================
//          ENDPOINTS
//==============================

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;

  if (!title || !budgetAmount) {
    res.status(400).json({ message: 'Must provide a title and budget!' });
  } else {
    const budget = new Budget(req.body)
    budget
      .save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(err => {
        res.status(500).json({ message: 'Something went wrong! ' });
      });
  };
});


//==============================
//      SERVER INFORMATION
//==============================

mongoose
  .connect('mongodb://localhost/budget')
  .then(() => {
    server.listen(3000, () => console.log('API Server running on port 3000'));
  })
  .catch(error => {
    console.error('database connection failed');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
