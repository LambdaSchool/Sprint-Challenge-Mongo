const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app
    .route('/budget')
    .post(budgetControllers.budgetCreate);

  app
    .route('/category')
    .post(categoryControllers.categoryCreate)
    .get(categoryControllers.categoryList);
  
  app
    .route('/category/:id')
    .get(categoryControllers.categoryListById);

  app
    .route('/expense')
    .post(expenseControllers.expenseCreate)
    .get(expenseControllers.expenseList);
};
