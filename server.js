const express = require('express');
const helmet = require('helmet');

const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

const server = express();

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('... API Connected to Database ...');
  })
  .catch(err => {
    console.log('*** ERROR Connecting to Database ***', err);
  });

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

server.get('/', (res, req) => res.send('API IS LIT'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
