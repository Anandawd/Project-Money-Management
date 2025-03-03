const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// import router
const TransactionsRouter = require("./routes/transactions");

// middleware
app.use(express.json());
app.use(cors());

// routing
app.use("/api/v1/transactions", TransactionsRouter);

// server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running in port http://localhost/${port}`);
});
