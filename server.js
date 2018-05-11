const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const db = require("./data/db");
const budgetRouter = require("./budget/budgetRouter");
const expenseRouter = require("./expense/expenseRouter");
const categoryRouter = require("./category/categoryRouter");

const server = express();

db
	.connectTo("mongoSprint")
	.then(() => {
		console.log("\n... API Connected to Database ...\n");
	})
	.catch(err => {
		console.log("\n*** ERROR Connecting to Database ***\n", err);
	});

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
server.use("/api/budget", budgetRouter);
server.use("/api/category", categoryRouter);
server.use("/api/expense", expenseRouter);

server.get("/", (req, res) => {
	res.send("API Running...");
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Server up and running on ${port}`);
});
