const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const db = require('./data/db.js');
const budgetsRouter = require('./budget/budgetsRouter.js');
const expensesRouter = require('./expense/expensesRouter.js');
const categoriesRouter = require('./category/categoriesRouter.js');

db
  .connectTo('Budgets')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetsRouter);
server.use('/api/expenses', expensesRouter);
server.use('/api/categories', categoriesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
