const express = require("express");
const router = express.Router();
const {
  createTransactions,
  destroyTransactions,
  getDetailTransactions,
  getTransactions,
  updateTransactions,
} = require("../controllers/transactionController");

// get all transactions
router.get("/", getTransactions);

// get transaction by
router.get("/:id", getDetailTransactions);

// add transaction
router.post("/", createTransactions);

// update transaction
router.put("/:id", updateTransactions);

// delete transaction
router.delete("/:id", destroyTransactions);

module.exports = router;
