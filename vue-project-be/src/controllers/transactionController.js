const { where } = require("sequelize");
const { Transaction } = require("../models");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();

    return res.status(200).json({
      message: "Data berhasil diambil",
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan server",
      error: error.message,
    });
  }
};

exports.getDetailTransactions = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findByPk(id);

    if (!transaction) {
      return res.status(404).json({
        message: "Data id tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Data berhasil ditemukan",
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan server",
      error: error.message,
    });
  }
};

exports.updateTransactions = async (req, res) => {
  try {
    const id = req.params.id;
    await Transaction.update(req.body, {
      where: {
        id: id,
      },
    });

    const newTransaction = await Transaction.findByPk(id);

    if (!newTransaction) {
      return res.status(404).json({
        message: "Data id tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Data berhasil diperbarui",
      data: newTransaction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan server",
      error: error.message,
    });
  }
};

exports.destroyTransactions = async (req, res) => {
  try {
    const id = req.params.id;

    const transaction = await Transaction.findByPk(id);

    if (!transaction) {
      return res.status(404).json({
        message: "Data id tidak ditemukan",
      });
    }

    await Transaction.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: `Data dengan id ${id} berhasil dihapus`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan server",
      error: error.message,
    });
  }
};

exports.createTransactions = async (req, res) => {
  try {
    let { name, amount, date, type, category, wallet, note } = req.body;

    // Validasi input
    if (!name || !amount || !date || !type || !category || !wallet) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    const newTransaction = await Transaction.create({
      name: name,
      amount: amount,
      date: date,
      type: type,
      category: category,
      wallet: wallet,
      note: note,
    });

    return res.status(201).json({
      message: "Data berhasil ditambahkan",
      data: newTransaction,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan server",
      error: error.message,
    });
  }
};
